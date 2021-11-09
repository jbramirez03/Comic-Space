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
    justifyContent: "spaceEvenly",
    padding: "5px",
    marginTop: "4px"
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

const inputName = {
    width: "200px",
    float: "left",
    marginTop: "2%",
}
const inputTitle = {
   
    width: "200px",
    float: "left",
    marginTop: "2%",
}

const headerDiv = {
    width: "200px",
    float: "left",
    marginTop: "2%",
}



const Forum = () => {
   
    return (
        <div style={divBox}>
        <div><Container style={messageStyle}>
            Messages
        </Container></div>
        
    <Container style={messageStyle}>
    <div style={headerDiv}>
    <TextField
    label="Required"
    defaultValue="Your name"
    size="small"
    style={inputName}></TextField>
    <TextField
    size="small"
    label="Required"
    required="true"
    defaultValue="Topic"
    style={inputTitle}></TextField>
    </div>
    <TextField 
     fullWidth
     required="true"
     label="required"
     id="outlined-multiline-static body"
     label="Required"
     multiline
     rows={3}
     defaultValue="Start a thread..."
     style={messageStyle}
     >
    </TextField>
  
    <Box style={submitButton}><Button variant="contained">Submit</Button>
</Box>
    </Container>
    <ForumReply />

   
    </div>


    )
}
     export default Forum;
