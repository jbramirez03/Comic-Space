import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import { useState } from 'react'
import Axios from "axios";
import { Image } from "cloudinary-react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/profile">
        View Your Profile
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function UpdateProfile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      bio: data.get("bio"),
      favoriteChar: data.get("favoriteChar"),
    });
  };
  const [image, setImage] = React.useState();
  const [url, setUrl] = React.useState("");
  // const formData = { file: image, upload_preset: "bx4wrv2o" };
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "bx4wrv2o");

  const uploadImage = async () => {
    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/dfqlw4w2v/image/upload",
      formData
    );
    setUrl(response.data.url);
    console.log(response);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Information
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type="username"
              id="username"
              autoComplete="current-username"
            />
            <TextField
              margin="normal"
              multiline="true"
              required
              fullWidth
              name="bio"
              label="Bio"
              type="bio"
              id="bio"
              autoComplete="current-bio"
            />
            <TextField
              margin="normal"
              multiline="true"
              required
              fullWidth
              name="favoriteChar"
              label="Favoritce Characters"
              type="favoriteChar"
              id="favoriteChar"
              autoComplete="current-favoriteChar"
            />
            <Typography
              variant="h6"
              align="center"
              sx={{
                py: "5px",
                color: "black",
              }}
            >
              Update Profile Image
            </Typography>
            <Input
              disableUnderline="true"
              color="primary"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Button variant="contained" onClick={uploadImage}>
              Upload image
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
