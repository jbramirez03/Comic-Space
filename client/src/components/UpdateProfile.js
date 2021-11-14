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
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';

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
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];
  const [updateUser] = useMutation(UPDATE_USER);
  const [updateForm, setUpdateForm] = React.useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(updateForm);
    const { data } = await updateUser({
      variables: {
        ...updateForm
      }
    });
  };
  const [image, setImage] = React.useState();
  // const [url, setUrl] = React.useState("");
  // const formData = { file: image, upload_preset: "bx4wrv2o" };
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "bx4wrv2o");

  React.useEffect(() => {
    console.log(userData);
    if (!loading) {
      setUpdateForm({ email: userData.email, firstName: userData.firstName, lastName: userData.lastName, image: '' });
    }
  }, [userData])


  const uploadImage = async () => {
    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/dfqlw4w2v/image/upload",
      formData
    );
    setUpdateForm({ ...updateForm, image: response.data.url });
    console.log(response);
  };
  if (loading) {
    return (
      <div>LOADING...</div>
    )
  }
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
              onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
              // label={updateForm.email}
              value={updateForm.email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={updateForm.firstName}
              name="firstName"
              onChange={(e) => setUpdateForm({ ...updateForm, firstName: e.target.value })}
              // label=
              type="firstName"
              id="firstName"
            // autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              // label=
              onChange={(e) => setUpdateForm({ ...updateForm, lastName: e.target.value })}
              value={updateForm.lastName}
              type="lastName"
              id="lastName"
            // autoComplete="current-username"
            />
            {/* <TextField
              margin="normal"
              // multiline={false}
              required
              fullWidth
              name="image"
              // label="image"
              type="image"
              id="image"
            // autoComplete="current-bio"
            /> */}
            {/* <TextField
              margin="normal"
              multiline="true"
              required
              fullWidth
              name="favoriteChar"
              label="Favoritce Characters"
              type="favoriteChar"
              id="favoriteChar"
              autoComplete="current-favoriteChar"
            /> */}
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
              disableUnderline={true}
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
