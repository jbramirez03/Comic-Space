import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


const replyButton = {
    float: "right",
   marginTop:"2%"
}
const forumReply = {
    width: "65%",
    marginTop: "1%",
    alignItems: "center"
}
const inputName = {
  width: "200px",
  float: "left",
  marginTop: "2%",
}

const ThreadReply = () => {
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
<TextField
    label="Required"
    defaultValue="Your name"
    size="small"
    style={inputName}></TextField>

<Box style={replyButton}><Button variant="contained">Submit</Button>
</Box>
</Container> 
</div> 
 )
 }

export default ThreadReply;
