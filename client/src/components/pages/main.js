import React from "react";
import heroes from "../../images/heroes.jpg";
import Boom from "../../images/boom.jpeg";
import Collection from "../../images/Collection.png";
import Wishlist from "../../images/Wishlist.png";
import Search from "../../images/Search.png";
import Profile from "../../images/Profile.png";
import Spines from "../../images/collectionSpines.jpeg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const main = () => {
  return (
    <>
      <CssBaseline />
      {/* <main> */}
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="lg" spacing={4}>
          <Grid container spacing={0} align="center">
            <Grid item xs={12}>
              <Typography
                variant="h1"
                gutterBottom
                align="center"
                className="mainHeader"
              >
                COMIC SPACE <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Button
                variant="contained"
                // className="button1"
                component={Link}
                to="/search"
                sx={{ mb: "20px" }}
              >
                <Typography variant="subtitle1">Get Started</Typography>
              </Button>
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                className="welcomeText"
              >
                Welcome to Comic Space! If you can't tell, we really love
                comics. Our goal is to help collectors keep track of their
                ever-expanding comic collections, while meeting fellow comic
                fans. Buy, Sell, or Trade with other collectors, and join the
                discussion in the forum.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Grid container align="center">
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>

        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>
      </Grid>
      <Container maxWidth="lg" spacing={0}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className="howHeaderMain"
              sx={{ marginTop: "20px" }}
            >
              How it Works...
            </Typography>
          </Grid>

          {/* <Grid container> */}
          <Grid item xs={12} sm={8} md={6} align="center">
            <img className="mainTwo" src={Profile} alt="boom" />
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="howHeader"
            >
              Create a Profile
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} align="center">
            <img className="mainTwo" src={Collection} alt="boom" />
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="howHeader"
            >
              Build Your Collection
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <img className="mainTwo" src={Wishlist} alt="boom" />
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="howHeader"
            >
              Create a Wishlist
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <img className="mainTwo" src={Search} alt="boom" />
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="howHeader"
            >
              Buy, Sell, or Trade
            </Typography>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Container>
      {/* </main> */}
    </>
  );
};

export default main;
