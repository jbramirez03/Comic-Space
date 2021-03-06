import React from 'react'
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { POST_MESSAGE } from '../../utils/mutations';
import { MESSAGES, QUERY_ME } from '../../utils/queries';
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions';
import { Container, Typography, Paper, TextField, IconButton } from '@mui/material';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useAlert } from 'react-alert';

const styles = {
    bubble: {
        display: 'flex',
        marginBottom: '15px'
    }
}

const Discussion = () => {
    const [content, setContent] = React.useState('');
    const [newPost] = useMutation(POST_MESSAGE);
    const { userLoading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];
    const alert = useAlert();
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
        if (content === '') {
            alert.show('Must type something before hitting send')
            return;
        } else {
            handlePost();

        }
    };

    if (loading || userLoading) {
        return (
            <div>loading...</div>
        )
    }


    return (
        <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', border: 1, marginTop: '3rem', padding: '3rem', borderColor: 'grey', borderRadius: '.5rem', backgroundColor: '#fafafa' }}>
            <Typography component='div'>
                <Typography variant="h2" gutterBottom component="div" sx={{ textAlign: 'center', marginBottom: '5rem' }}>
                    Who is your favorite Marvel character??
                </Typography>
                {messages.map((message, i) => {
                    return (
                        <Typography component='div' sx={{ ...styles.bubble, justifyContent: `${message.author === `${userData.firstName} ${userData.lastName}` ? 'flex-end' : 'flex-start'}` }} variant='body1' key={i}><Paper sx={{ padding: '.5rem', backgroundColor: `${message.author === `${userData.firstName} ${userData.lastName}` ? '#bbdefb' : '#8aacc8'}` }} elevation={4}>{message.content}<br />Posted by: {message.author}</Paper></Typography>
                    )
                })}
            </Typography>
            <form action="submit" onSubmit={onSubmit}>
                {/* <input type="text" placeholder='content' value={content}  /> */}
                <TextField
                    type='text'
                    fullWidth
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    label='Enter Text Here...'
                />
                <div className='submitBtn'>
                    <IconButton type='submit'><AiOutlineArrowUp>Send</AiOutlineArrowUp></IconButton>

                </div>
            </form>

        </Container>
    )
}

export default Discussion;
