import React from 'react'
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { POST_MESSAGE } from '../../utils/mutations';
import { MESSAGES, QUERY_ME } from '../../utils/queries';
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions';

const Discussion = () => {
    const [content, setContent] = React.useState('');
    const [newPost] = useMutation(POST_MESSAGE);
    const { userLoading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];
    const {
        subscribeToMore,
        loading,
        data: { messages } = {},
    } = useQuery(MESSAGES);
    const { data: messagesData, loading: loadingMessages } = useSubscription(MESSAGES_SUBSCRIPTION);
    React.useEffect(() => {
        console.log('Message Data: ', messages);
    }, [messages]);
    React.useEffect(() => {
        console.log('Subscription Post: ', messagesData);
    }, [messagesData]);
    React.useEffect(() => {
        console.log('Loading subscription data: ', loadingMessages);
    }, [loadingMessages]);

    const handlePost = async () => {
        await newPost({
            variables: { content: content, author: `${userData.firstName} ${userData.lastName}` }
        })
    };

    const subscribeToChat = React.useCallback(() => {
        subscribeToMore({
            document: MESSAGES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newFeedItem = subscriptionData.data.newMessage;
                return Object.assign({}, prev, {
                    messages: [...prev.messages, newFeedItem],
                });
            },
        });
    }, [subscribeToMore]);

    React.useEffect(() => {
        subscribeToChat();
    }, [subscribeToChat]);

    const onSubmit = (event) => {
        event.preventDefault();
        handlePost();
        // console.log(message);
    };

    if (loading || userLoading) {
        return (
            <div>loading...</div>
        )
    }


    return (
        <div>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" placeholder='content' value={content} onChange={e => setContent(e.target.value)} />
                <button action='submit'>Send</button>
            </form>
            <div>
                {messages.map((message, i) => {
                    return (
                        <div key={i}>{message.content} {message.author}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Discussion;
