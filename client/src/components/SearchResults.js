import axios from "axios";
import CryptoJS from "crypto-js";
import { useState } from "react";
import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

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
      buttons = [...buttons, { i: i, page: currentPage }];
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
      <Grid container spacing={4}>
        <Grid item>
          <div>
            <form action="submit" onSubmit={onSubmit}>
              <input
                type="text"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
              />
              <button>Search</button>
            </form>
            {comics.length >= 1
              ? comics.map((comic) => {
                  return (
                    <div key={comic.id}>
                      <h3>{comic.title}</h3>
                      <p>{comic.description}</p>
                      <img
                        width="75px"
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt="comic"
                      />
                    </div>
                  );
                })
              : "Character"}
            {test.length
              ? test.map((button) => (
                  <Button
                    variant="contained"
                    sx={{ margin: 1 }}
                    key={button.i}
                    onClick={() => next(button.page)}
                  >
                    Hi
                  </Button>
                ))
              : ""}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tester;
