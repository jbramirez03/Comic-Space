import React from 'react'
import Forum from './pages/Forum'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";

const replyBox = {
  width: "85%",
  marginTop: "1%",
    alignItems: "center"
}

const submitButton = {
    marginTop:"2%",
  marginLeft: "90%"
}
const ForumReply = () => {
    return (
        <div>
        <Container style={replyBox}>
     
            <TextField 
     fullWidth
         id="outlined-multiline-static"
         label=""
         multiline
         rows={1.5}
         defaultValue="Reply to this thread"
         >
        </TextField>
        <Box style={submitButton}><Button variant="contained">Reply</Button>
</Box>
        </Container>
        </div>
    )
}

export default ForumReply;
