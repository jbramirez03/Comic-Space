import axios from "axios";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SAVE_COMIC, WISH_COMIC } from "../utils/mutations";
import Auth from "../utils/auth";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import Card from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";
// import Cards from "../components/Cards";
import Shadow from "../components/Shadow";
import { useAlert } from "react-alert";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { QUERY_ME } from "../utils/queries";

const cardStyle = {
  frontSide: {
    backgroundColor: "#531c28",
    border: "2px solid #531c28",
    borderRadius: "5px",
    boxShadow: "3px 3px 4px grey",
    height: "100%",
    width: "100%",
  },
  backSide: {
    color: "black",
    backgroundColor: "#d7c5b7",
    overflowX: "auto",
  },
};
const imgStyle = {
  width: "100%",
  height: "100%",
  overflow: "scroll",
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
  const alert = useAlert();
  const [autos, setAutos] = useState([]);
  let startsWith = [];

  const [saveComic] = useMutation(SAVE_COMIC);
  const [wishComic] = useMutation(WISH_COMIC);
  const { loading, data } = useQuery(QUERY_ME);
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const userData = data?.me || [];
  let shadowArray = [];

  React.useEffect(() => {
    if (!loading) {
      setCollection([...userData.comics]);
      setWishlist([...userData.wishlist]);
    }
  }, [userData]);

  const handleComicSave = async (comicId) => {
    const comicToSave = comics.find((comic) => comic.comicId === comicId);

    console.log(comicToSave);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    // Add the input for the mutation save_book in a variable object set to bookToSave
    try {
      await saveComic({
        variables: { input: comicToSave },
      });
    } catch (err) {
      console.error(err);
    }
  };
  // Wishlish function to add to comic Wishlist in profile
  const handleComicWish = async (comicId) => {
    const comicToWish = comics.find((comic) => comic.comicId === comicId);

    console.log(comicToWish);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    // Add the input for the mutation save_book in a variable object set to bookToSave
    try {
      await wishComic({
        variables: { input: comicToWish },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const createAutoComplete = async () => {
    if (character.length >= 4) {
      const returnedValue = await axios.get(
        `${characterUrl}${params}&nameStartsWith=${character}`
      );
      if (returnedValue.data.data.results.length > 0) {
        returnedValue.data.data.results.map((auto) =>
          startsWith.push(auto.name)
        );
        setAutos([...startsWith]);
      }
      console.log(returnedValue);
    } else {
      setAutos([]);
      startsWith = [];
    }
  };

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
    if (characterInfo.data.data.results.length >= 1) {
      console.log(characterInfo);
      const characterId = characterInfo.data.data.results[0].id;
      const rawComics = await getComics(characterId);
      // console.log(rawComics)
      return rawComics;
    } else {
      console.log("Character not found");
      return;
    }
    // const characterId = characterInfo.data.data.results[0].id;
    // const rawComics = await getComics(characterId);
    // return rawComics;
  };

  const setResponse = (response) => {
    const rawComics = [...response.data.data.results];
    const comicData = rawComics.map((comic) => ({
      comicId: comic.id,
      title: comic.title || "No title available",
      description: comic.description || "No description available",
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}` || "",
    }));
    shadowArray = [];
    setComics(comicData);
  };

  const createButtons = (p) => {
    let currentPage = 0;
    for (let i = 0; i < p; i++) {
      buttons = [...buttons, { i: i, page: currentPage, num: i + 1 }];
      currentPage += 20;
    }
  };

  const findPage = (page) => {
    const set = test.find((button) => button.num === page);
    next(set.page);
    console.log(set.page);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await search();
    if (response === undefined) {
      alert.show("Character not found");
      return;
    }
    shadowArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const p = Math.ceil(response.data.data.total / 20);
    createButtons(p);
    setTest([...buttons]);
    setResponse(response);
    buttons = [];
  };

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <Container sx={{ py: 8, bgcolor: "transparent" }} maxWidth="lg">
      <Typography
        variant="h2"
        align="center"
        color="black"
        sx={{
          fontFamily: "Bangers",
          color: "#2b3d44",
          textShadow: "2px 1px 3px white",
        }}
      >
        Comic Search
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} sx={{ margin: " auto" }}>
          {/* <button onClick={() => console.log(collection)}>click</button> */}
          <form action="submit" onSubmit={onSubmit}>
            {/* <input
              placeholder="Search by character..."
              type="text"
              style={{
                margin: "0 auto",
                width: "100%",
                height: "30px",
                align: "center",
                fontSize: "20px",
                borderRadius: "5px",
              }}
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            /> */}
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={autos}
              renderInput={(params) => (
                <TextField
                  value={character}
                  onSelect={(e) => setCharacter(e.target.value)}
                  onChange={(e) => {
                    setCharacter(e.target.value);
                    createAutoComplete();
                  }}
                  {...params}
                  label="Search"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            <button
              style={{
                float: "right",
                width: "100px",
                height: "30px",
                marginTop: "5px",
                backgroundColor: "#4f999d",
                borderRadius: "5px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              SEARCH
            </button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        {shadowArray.length >= 1
          ? shadowArray.map((shadow) => {
            return <Shadow key={shadow} />;
          })
          : ""}
        {comics.length >= 1
          ? comics.map((comic) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={comic.comicId}>
                <Flippy
                  style={cardStyle.frontSide}
                  className="flipCard"
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <img src={comic.image} alt="comic" style={imgStyle} />
                  </FrontSide>
                  <BackSide style={cardStyle.backSide}>
                    <h3>{comic.title}</h3>
                    <p>{comic.description}</p>
                    {Auth.loggedIn && (
                      <Button
                        sx={{ marginBottom: "5px" }}
                        color="success"
                        variant="contained"
                        disabled={collection.some(
                          (collected) => collected.comicId === comic.comicId
                        )}
                        // disabled={}
                        onClick={() => handleComicSave(comic.comicId)}
                      >
                        Save to Collection
                      </Button>
                    )}
                    {Auth.loggedIn && (
                      <Button
                        variant="contained"
                        onClick={() => handleComicWish(comic.comicId)}
                        disabled={wishlist.some(
                          (wish) => wish.comicId === comic.comicId
                        )}
                      >
                        Add to Wishlist
                      </Button>
                    )}
                  </BackSide>
                </Flippy>
              </Grid>
            );
          })
          : ""}
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        {test.length ? (
          <Pagination
            sx={{ margin: "auto" }}
            count={test.length}
            variant="contained"
            size="large"
            color="black"
            defaultPage={1}
            shape="rounded"
            onChange={(event, page) => {
              console.log("Go to Page: ", page);
              findPage(page);
            }}
          />
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
};

export default Tester;
