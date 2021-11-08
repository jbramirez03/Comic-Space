import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";
import ForumReply from '../ForumReply';

const divBox = {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    display: "block",
  
}
const message = {
width: "100%",
marginTop: "3%",
alignItems: "center"
}
const submitButton = {
    marginTop:"2%",
  marginLeft: "90%"
}
const Forum = () => {
    return (
        <div style={divBox}>
            <div><Container style={message}>
                Messages
            </Container></div>
            
        <Container style={message}>
        <TextField 
     fullWidth
         id="outlined-multiline-static"
         label=""
         multiline
         rows={3}
         defaultValue="Start a conversation"
         >
        </TextField>
        <Box style={submitButton}><Button variant="contained">Submit</Button>
</Box>
        </Container>
        <ForumReply></ForumReply>
        </div>
    )
}

export default Forum;
