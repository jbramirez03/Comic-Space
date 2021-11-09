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
import Link from "@mui/material/Link";
import { Avatar } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ComicCard from "../ComicCard";
import ViewCollection from "../ViewCollection";
import ViewWishlist from "../ViewWishlist";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const picName = {
  display: "flex",
  flexDirection: "row",
  margin: "15px",
};

const user = {
  fontSize: "2rem",
};

const intro = {
  color: "white",
  marginLeft: "15px",
  marginTop: "15px",
  fontSize: "1rem",
};

const profilePic = {
  height: "100%",
  width: "100%",
};

export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];
  const [collectedComics, setCollectedComics] = React.useState([]);
  if (loading) {
    return <div>LOADING...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main style={{ backgroundColor: "#531c28" }}>
        {/* Hero unit */}
        <Box
          sx={{
            boxShadow: 2,
            bgcolor: "#385059",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              <div style={picName}>
                <div>
                  <Avatar
                    sx={{
                      bgcolor: "#4f999d",
                      m: "10px",
                      textAlign: "center",
                      width: 150,
                      height: 150,
                      borderRadius: "35%",
                    }}
                  >
                    <img
                      src="http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9.jpg"
                      alt="avatar"
                      style={profilePic}
                    />
                  </Avatar>
                  <div style={user}>User Name</div>
                </div>
                <div>
                  <Typography
                    variant="h5"
                    align="center"
                    style={intro}
                    paragraph
                  >
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don&apos;t simply skip over it entirely.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button variant="contained">Message Me</Button>
                    <Button variant="outlined" style={{ color: "white" }}>
                      Add Friend
                    </Button>
                  </Stack>
                </div>
              </div>
              {/* end profile pic div */}
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8, bgcolor: "#531c28" }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                gutterBottom
                style={{ color: "white", fontFamily: "Helvetica Neue" }}
              >
                Your Collection
                <Button
                  variant="contained"
                  onClick={() => setCollectedComics([...userData.comics])}
                >
                  View
                </Button>
                {/* <ViewCollection /> */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                gutterBottom
                style={{ color: "white", fontFamily: "Helvetica Neue" }}
              >
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
                  : "No comics to render"}
                Your Wishlist
                {/* <ViewWishlist /> */}
              </Typography>
            </Grid>
          </Grid>

          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>{/* <ViewCollection /> */}</Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
