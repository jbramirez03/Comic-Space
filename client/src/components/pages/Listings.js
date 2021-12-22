import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageGrid from "../ImageGrid";
import MainImage from "../MainImage";
import Info from "../Info";
import { useQuery } from '@apollo/client';
import { LISTINGS } from '../../utils/queries';


export default function Listings() {
  const { loading, data } = useQuery(LISTINGS);
  const [selectedImage, setSelectedImage] = useState(0);
  const [comics, setComics] = useState([]);
  let images = [];

  useEffect(() => {
    if (!loading) {
      console.log('not loading');
      setComics([...data.posts]);
    } else {
      console.log('still loading')
    }
  }, [loading]);

  if (loading) {
    return (
      <div>LOADING...</div>
    )
  }

  if (comics.length > 0) {
    comics.map(image => images = [...images, image.image]);
  }

  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "10px" }}
      >
        <Grid item sm={1}>
          <ImageGrid
            images={images}
            onSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </Grid>
        <Grid item sm={5}>
          <MainImage src={images[selectedImage]} />
        </Grid>
        <Grid item sm={6}>
          <Info {...comics[selectedImage]} />
        </Grid>
      </Grid>
    </div>
  );
}
