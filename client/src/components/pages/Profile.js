import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import { Avatar } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ComicCard from "../ComicCard";
import WishlistCard from "../WishlistCard";
import ComicSpaceLogo from "../../images/ComicSpaceLogo.png";
// import ComicSpaceBIG from "../../images/ComicSpaceBIG.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Comic Space
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const collectedComics = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

// const picName = {
//   display: "flex",
//   flexDirection: "row",
//   margin: "15px",
// };

const user = {
  fontSize: "2rem",
};

// const intro = {
//   color: "white",
//   marginLeft: "15px",
//   marginTop: "15px",
//   fontSize: "1rem",
// };

const profilePic = {
  // height: "100%",
  // width: "100%",
  objectFit: "contain",
};

export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];
  const [collectedComics, setCollectedComics] = React.useState([]);
  const [wishComics, setWishComics] = React.useState([]);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    console.log(userData);
    if (!loading) {
      setUser({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        about: userData.about,
        favorite: userData.favorite,
        image: userData.image,
      });
    }
  }, [userData]);

  if (loading) {
    return <div>LOADING...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main style={{ backgroundColor: "transparent" }}>
        {/* Hero unit */}
        <Box
          sx={{
            boxShadow: 2,
            bgcolor: "#385059",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" spacing={4}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={4}>
                <Avatar
                  sx={{
                    bgcolor: "transparent",
                    margin: "auto",
                    textAlign: "center",
                    width: 180,
                    height: 180,
                    borderRadius: "10px",
                  }}
                >
                  <img src={user.image} alt="profile-image" />
                </Avatar>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography
                    component="h1"
                    variant="h2"
                    gutterBottom
                    style={{
                      color: "white",
                      textAlign: "center",
                      bgcolor: "transparent",
                    }}
                  >
                    {user.firstName}
                    {user.lastName}
                  </Typography>
                </Grid>
              </Grid>
              {/* <div style={picName}> */}

              <Grid item xs={12} sm={6} md={8}>
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{ textAlign: "center", marginTop: "5px" }}
                >
                  About Me:
                </Typography>
                <Typography
                  variant="h4"
                  color="white"
                  align="center"
                  sx={{
                    textAlign: "center",
                    marginTop: "5px",
                    color: "#d7c5b7",
                  }}
                >
                  {userData.about}
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{ textAlign: "center", marginTop: "15px" }}
                >
                  Favorite Characters:
                </Typography>
                <Typography
                  variant="h4"
                  color="white"
                  align="center"
                  sx={{
                    textAlign: "center",
                    marginTop: "5px",
                    color: "#d7c5b7",
                  }}
                >
                  {userData.favorite}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    align="center"
                    component={Link}
                    to="/update"
                  >
                    Update Profile
                  </Button>
                  <Button variant="contained">DM</Button>
                  <Button variant="outlined" style={{ color: "white" }}>
                    Add Friend
                  </Button>
                </Stack>
              </Grid>
              {/* </div> */}
              {/* end profile pic div */}
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8, bgcolor: "transparent" }} maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            gutterBottom
            style={{ color: "black", fontFamily: "Helvetica Neue" }}
          >
            Your Collection
            <Button
              variant="contained"
              sx={{ marginLeft: "10px", bgcolor: "#4f999d" }}
              onClick={() => setCollectedComics([...userData.comics])}
            >
              View
            </Button>
            <Button
              variant="contained"
              sx={{ marginLeft: "10px", bgcolor: "#d23954" }}
              onClick={() => setCollectedComics([])}
            >
              Hide
            </Button>
          </Typography>

          <Grid container spacing={2} direction="row" alignItems="flex-start">
            {collectedComics.length > 1
              ? collectedComics.map((comic) => {
                  return (
                    <ComicCard
                      key={comic.comicId}
                      title={comic.title}
                      description={comic.description}
                      image={comic.image}
                    />
                  );
                })
              : ""}
            <Container sx={{ py: 8 }} maxWidth="lg">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                gutterBottom
                style={{ color: "black", fontFamily: "Helvetica Neue" }}
              >
                Your Wishlist
                <Button
                  variant="contained"
                  sx={{ marginLeft: "10px", bgcolor: "#4f999d" }}
                  onClick={() => setWishComics([...userData.wishlist])}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "10px", bgcolor: "#d23954" }}
                  onClick={() => setWishComics([])}
                >
                  Hide
                </Button>
              </Typography>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="flex-start"
              >
                {wishComics.length > 1
                  ? wishComics.map((comic) => {
                      return (
                        <WishlistCard
                          key={comic.comicId}
                          title={comic.title}
                          description={comic.description}
                          image={comic.image}
                        />
                      );
                    })
                  : ""}
              </Grid>
            </Container>
          </Grid>

          {/* End hero unit */}
        </Container>
      </main>
    </ThemeProvider>
  );
}
