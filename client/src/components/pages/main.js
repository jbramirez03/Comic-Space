import React from "react";
import heroes from "../../images/heroes.jpg";
import Boom from "../../images/boom.jpeg";
import Spines from "../../images/collectionSpines.jpeg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const main = () => {
  return (
    <>
      <Container maxWidth="md" spacing={2} align="center">
        <Box className="text1" align="center">
          <Typography variant="h1">
            Welcome to <br />
            COMIC SPACE
          </Typography>
          <Button
            variant="contained"
            className="button1"
            component={Link}
            to="/search"
          >
            <Typography variant="subtitle1">Get Started</Typography>
          </Button>
        </Box>

        <Grid container align="center">
          <Grid item xs={12} sm={8} md={12} align="center">
            <img className="mainOne" src={Boom} alt="boom" />

            <Typography variant="h6">
              {" "}
              Welcome to Comic Space! Our goal is to help collectors keep track
              of their ever-expanding comic collections, while meeting fellow
              comic fans, and buying, selling, and trading comics. If you can't
              tell, we really love comics.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={12}>
            <img className="mainOne" src={Spines} alt="boom" />

            <Typography variant="h6">
              {" "}
              Welcome to Comic Space! Our goal is to help collectors keep track
              of their ever-expanding comic collections, while meeting fellow
              comic fans, and buying, selling, and trading comics. If you can't
              tell, we really love comics.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <div className="firstPage">
        <img className="mainOne" src={Spines} alt="comic spines" />
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="firstPage">
        <img className="mainOne" src={heroes} alt="heroes" />
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div> */}
    </>
  );
};

export default main;
