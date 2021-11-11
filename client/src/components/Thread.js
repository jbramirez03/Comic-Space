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
const Thread = ({reply}) => {
    // if (!reply.length) {
    //     return <h3>No Replies Yet</h3>;
    //   }
    return (
        <div>
                 <Container style={thread}>
                <Box></Box>
                <Divider textAlign="left">{} says</Divider>
            {reply}
            </Container>
        </div>
    )
}

export default Thread
