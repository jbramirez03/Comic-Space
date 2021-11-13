import React from 'react'
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import ThreadReply from './ThreadReply';

const thread = {
    marginTop: "15px",
    border: "solid .5px",
    width: "65%"
}
const emptyReply = {
    textAlign: "center"
}
const Thread = ({reply}) => {
    // if (!reply.length) {
    //     return <h3 style={emptyReply}>There are no replies to thread yet</h3>;
    //   }
    return (
        <div>
                 <Container style={thread}>
                <Box></Box>
                <Divider textAlign="left">{} says</Divider>
            {reply} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Container>
        </div>
    )
}

export default Thread
