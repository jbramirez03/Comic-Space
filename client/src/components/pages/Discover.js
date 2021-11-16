import React from 'react'
import User from "../User"; 
import { Container, TextField } from '@mui/material'
import Box from '@mui/material/Box';




  const flexCon = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"

  }
const Discover = () => {
    return (
        <div>

            <Container maxWidth="lg"
            sx={{ textAlign: "center", bgcolor: 'transparent', height: '75px', padding: '5px' }} 
            >
           


          <Container maxWidth="sm" style={flexCon}>
              <Box
              sx={{fontSize:"2rem"}}>
                Discover Users
              </Box>
              <TextField 
              size="small"
              variant="outlined"
              label="Search for users"
             >
                
              </TextField>
          </Container>
            
            
            </Container>
            <User />
        </div>
    )
}

export default Discover
