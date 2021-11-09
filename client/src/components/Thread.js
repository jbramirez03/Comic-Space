import React from 'react'
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';

const thread = {
    marginTop: "15px",
    border: "solid .5px",
    width: "65%"
}
const Thread = () => {
    return (
        <div>
                 <Container style={thread}>
                <Box></Box>
                <Divider textAlign="left">Username says</Divider>
                This will be where a reply goes 
            </Container>
        </div>
    )
}

export default Thread
