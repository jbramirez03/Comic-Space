import { Button } from '@mui/material'
import React from 'react'
import { Container } from '@mui/material'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import { ListItem } from '@mui/material'

const flexCon = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    border: "black 2px solid",
    padding: "15px"
}

const User = () => {
    return (
        <div>
          <Container maxWidth="xs" 
          style={flexCon}>
              
              <Box>
      <Avatar
      src={"http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9.jpg"}
      sx={{
        bgcolor: "transparent",
        margin: "auto",
        width: 105,
        height: 105,
        objectFit: "scale-down",
        borderRadius: "10px",
      }}
    >
   User Name
    </Avatar>
    </Box>
    <Stack spacing={2}>
                  
                  <ListItem>Username</ListItem>
                  <Button size="small" variant="contained">View Profile</Button>
              </Stack>
          </Container>
        </div>
    )
}

export default User
