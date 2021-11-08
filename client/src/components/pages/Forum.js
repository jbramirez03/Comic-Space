import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

const divFlex = {
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
const Forum = () => {
    return (
        <div style={divFlex}>
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

        </Container>
        </div>
    )
}

export default Forum
