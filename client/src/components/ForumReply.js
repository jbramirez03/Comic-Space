import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";
import Forum from './pages/Forum';



const replyButton = {
    float: "right",
   marginTop:"2%"
}
const forumReply = {
    width: "65%",
    marginTop: "1%",
    alignItems: "center"
}

const ForumReply = () => {
    return (
        <div >
        <Container style={forumReply}>  
       <TextField 
        fullWidth
     id="outlined-multiline-static reply"
     label=""
     multiline
     rows={1.5}
     defaultValue="Reply to this thread..."
     >
    </TextField>
    
   
        <Box style={replyButton}><Button variant="contained">Submit</Button>
</Box>
</Container> 
        </div>
    )
}

export default ForumReply;
