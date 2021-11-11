import React, {useState} from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Thread from './Thread';


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
const [ reply, setReply] = useState('')
const [ name, setName] = useState('')
const handleSubmit =(e) => {
    e.preventDefault()

    if (name && reply) {
        console.log( name, reply)
    }
}
    return (
 <div >
     <Thread name={ name } reply={ reply } />
<Container style={forumReply}> 
 <form>
<TextField 
onChange={(e) => setReply(e.target.value)}
fullWidth
id="outlined-multiline-static reply"
label=""
multiline
rows={1.5}
defaultValue="Reply to this thread..."
>
</TextField>
<TextField
onChange={(e) => setName(e.target.value)}
    label="Required"
    defaultValue="Your name"
    size="small"
    style={inputName}></TextField>

<Box style={replyButton} onClick={handleSubmit}><Button variant="contained">Submit</Button>
</Box>
</form>
</Container> 
</div> 
 )
 }

export default ThreadReply;
