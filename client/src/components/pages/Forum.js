import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";
import ForumReply from '../ForumReply';
import { useState } from 'react';

const divBox = {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    display: "block",
  
}
const messageStyle = {
width: "100%",
marginTop: "3%",
alignItems: "center"
}
const submitButton = {
    marginTop:"2%",
  marginLeft: "90%"
}


const Forum = () => {
    // const [body, setBody] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const message = {body.value};

    //     fetch('http://localhost:3000/forum', {
    //         method: 'POST', 
    //         body: JSON.stringify(message)
    //     }).then(() => 
    //     console.log("new thread made"))
    // }
    return (
        
        <div style={divBox}>
            <div><Container style={messageStyle}>
                Messages
            </Container></div>
            
        <Container style={messageStyle}>
        <TextField 
         fullWidth
         id="outlined-multiline-static body"
         label="start thread"
         multiline
         rows={3}
         defaultValue=""
         >
        </TextField>
        <Box style={submitButton}><Button variant="contained">Submit</Button>
</Box>
        </Container>
        <ForumReply> <TextField 
     fullWidth
         id="outlined-multiline-static reply"
         label=""
         multiline
         rows={1.5}
         defaultValue="Reply to this thread..."
         >
        </TextField></ForumReply>

       
        </div>
    )
}

export default Forum;
