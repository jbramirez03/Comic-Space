import React from 'react'
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { POST_MESSAGE } from '../../utils/mutations';
import { MESSAGES, QUERY_ME } from '../../utils/queries';
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions';
import { Container, Typography, Paper } from '@mui/material';
import Auth from '../../utils/auth';


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
        setContent('');
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
    };

    if (loading || userLoading) {
        return (
            <div>loading...</div>
        )
    }


    return (
        <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', border: 1, marginTop: '3rem', padding: '3rem', borderColor: 'grey', borderRadius: '.5rem', }}>
            <Typography component='div'>
                {messages.map((message, i) => {
                    return (
                        <Typography sx={{ display: 'flex', marginBottom: '15px', justifyContent: `${message.author === `${userData.firstName} ${userData.lastName}` ? 'flex-end' : 'flex-start'}` }} variant='body1' key={i}><Paper sx={{ padding: '.5rem' }} elevation={4}>{message.content}<br />Posted by: {message.author}</Paper></Typography>
                    )
                })}
            </Typography>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" placeholder='content' value={content} onChange={e => setContent(e.target.value)} />
                <button action='submit'>Send</button>
            </form>
        </Container>
    )
}

export default Discussion;
