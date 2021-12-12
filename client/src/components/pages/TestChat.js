import React from 'react'
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { POST_MESSAGE } from '../../utils/mutations';
import { MESSAGES } from '../../utils/queries';
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions';

const TestChat = () => {
    const [content, setContent] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [newPost] = useMutation(POST_MESSAGE);
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
            variables: { content: content, author: author }
        })
    };

    const subscribeToChat = React.useCallback(() => {
        subscribeToMore({
            document: MESSAGES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newFeedItem = subscriptionData.data.newMessage;
                return Object.assign({}, prev, {
                    posts: [...prev.posts, newFeedItem],
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
        console.log(message);
    };

    if (loading) {
        return (
            <div>loading...</div>
        )
    }


    return (
        <div>

        </div>
    )
}

export default TestChat
