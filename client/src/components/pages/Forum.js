import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";
import ThreadReply from '../ThreadReply';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Thread from '../Thread';
// import { fontSize } from '@mui/system';




const divBox = {

  width: "100%",
  alignItems: "center",
  textAlign: "center",
  display: "block",
  justifyContent: "spaceEvenly",


}
const messageStyle = {
  width: "100%",
  marginTop: "50px",
  fontSize: "3rem",
  alignItems: "center",
  textAlign: "center",

}
const submessageStyle = {
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  marginTop: "3%",

}
const submitButton = {
  marginTop: "2%",
  marginLeft: "90%"
}

const inputName = {
  width: "200px",
  float: "left",
  marginTop: "2%",
  borderColor: "#2196f3"
}
const inputTitle = {

  width: "200px",
  float: "left",
  marginTop: "2%",
  borderColor: "#2196f3"
}

const headerDiv = {
  width: "200px",
  float: "left",
  marginTop: "10%",
  borderColor: "#2196f3"
}

// const quiet = {
//   textAlign: "center"
// }

const newConversation = {
  width: "100%",
  marginTop: "15%",
  fontSize: "1.5rem"
}

const Forum = (thought, title) => {
  // if (!thought.length) {
  //   return <><h3 style={quiet}>Start a Conversation here</h3><Container style={messageStyle}>
  //     <div style={headerDiv}>
  //       <TextField
  //         label="Your name"
  //         required='true'
  //         size="small"
  //         style={inputName}></TextField>
  //       <TextField
  //         size="small"
  //         label="What is the topic?"
  //         required="true"
  //         style={inputTitle}></TextField>
  //     </div>
  //     <TextField
  //       fullWidth
  //       required="true"
  //       label="Start a discussion"
  //       id="outlined-multiline-static body"
  //       multiline
  //       rows={3}
  //       style={messageStyle}
  //     >
  //     </TextField>

  //     <Box style={submitButton}><Button variant="contained">Submit</Button>
  //     </Box>
  //   </Container></>


  // }

  return (

    <div style={divBox}>

      <div>
        <Container style={messageStyle}>
          Join a conversation..
        </Container>
        <ThreadReply />
        <Container style={submessageStyle}
        >
          <Container style={messageStyle}>
            <div style={newConversation}>...Or start a new conversation</div>
            <div style={headerDiv}>

              <TextField
                label="Your name"
                required='true'
                size="small"
                style={inputName}></TextField>
              <TextField
                size="small"
                label="What is the topic?"
                required="true"

                style={inputTitle}></TextField>
            </div>
            <TextField
              fullWidth
              required="true"
              label="Start a discussion"
              id="outlined-multiline-static body"
              multiline
              rows={3}
              style={messageStyle}
            >
            </TextField>

            <Box style={submitButton}><Button variant="contained">Submit</Button>
            </Box>
          </Container>
        </Container></div>






    </div>


  )
}
export default Forum;
