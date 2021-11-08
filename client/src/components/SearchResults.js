import axios from "axios";
import CryptoJS from "crypto-js";
import { useState } from "react";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
// import Cards from "../components/Cards";

const cardStyle = {
  frontSide: {
    backgroundColor: "#531c28",
    border: "2px solid #531c28",
    borderRadius: "5px",
    boxShadow: "3px 3px 0px #4f999d",
    height: "100%",
    width: "100%",
  },
  backSide: {
    color: "black",
    backgroundColor: "#d7c5b7",
  },
};
const imgStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const Tester = () => {
  const PRIV_KEY = "b62c40680e3ea3090a2462bc3021628651c2d45f";
  const PUBLIC_KEY = "ab9297e9d4bda4ab94cb17eb9e3fe843";
  const [character, setCharacter] = useState("");
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  const [comics, setComics] = useState([]);
  const params = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const characterUrl = `https://gateway.marvel.com/v1/public/characters?`;
  const comicUrl = `https://gateway.marvel.com/v1/public/comics?`;
  const [searchedUrl, setSearchedUrl] = useState("");
  let buttons = [];
  const [test, setTest] = useState([]);

  const getCharacterId = () => {
    return axios.get(`${characterUrl}${params}&name=${character}`);
  };

  const getComics = (input) => {
    setSearchedUrl(`${comicUrl}${params}&characters=${input}`);
    return axios.get(`${comicUrl}${params}&characters=${input}`);
  };

  const next = async (input) => {
    const response = await axios.get(`${searchedUrl}&offset=${input}`);
    setResponse(response);
  };

  const search = async () => {
    const characterInfo = await getCharacterId(character);
    const characterId = characterInfo.data.data.results[0].id;
    const rawComics = await getComics(characterId);
    return rawComics;
  };

  const setResponse = (response) => {
    setComics([...response.data.data.results]);
  };

  const createButtons = (p) => {
    let currentPage = 0;
    for (let i = 0; i < p; i++) {
      buttons = [...buttons, { i: i, page: currentPage, num: i + 1 }];
      currentPage += 20;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await search();
    const p = Math.ceil(response.data.data.total / 20);
    createButtons(p);
    setTest([...buttons]);
    setResponse(response);
    buttons = [];
  };

  return (
    <Container sx={{ py: 8, bgcolor: "#385059" }} maxWidth="md">
      <Typography variant="h2" align="center" color="white">
        Comic Search
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} sx={{ margin: "0 auto" }}>
          <form action="submit" onSubmit={onSubmit}>
            <input
              type="text"
              style={{ margin: "0 auto", width: "100%", align: "center" }}
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            />
            <button
              sx={{
                width: "100px",
                height: "30px",
                marginTop: "5px",
                bgackgroundColor: "#531c28",
              }}
            >
              Search
            </button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        {comics.length >= 1
          ? comics.map((comic) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Flippy
                    style={cardStyle.frontSide}
                    className="flipCard"
                    flipOnClick={true}
                    flipDirection="horizontal"
                    key={comic.id}
                  >
                    <FrontSide>
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt="comic"
                        style={imgStyle}
                      />
                    </FrontSide>
                    <BackSide style={cardStyle.backSide}>
                      <h3>{comic.title}</h3>
                      <p>{comic.description}</p>
                    </BackSide>
                  </Flippy>
                </Grid>
              );
            })
          : ""}
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        {test.length
          ? test.map((button) => (
              <Button
                variant="contained"
                sx={{ margin: 1 }}
                key={button.i}
                onClick={() => next(button.page)}
              >
                {button.num}
              </Button>
            ))
          : ""}
      </Grid>
    </Container>
  );
};

export default Tester;
