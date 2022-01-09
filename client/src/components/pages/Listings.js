import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageGrid from "../ImageGrid";
import MainImage from "../MainImage";
import Info from "../Info";
import { useQuery } from '@apollo/client';
import { LISTINGS } from '../../utils/queries';
// import { UPDATE_POSTS } from '../../utils/actions';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';


export default function Listings() {
  const state = useSelector(state => state);
  // const dispatch = useDispatch()
  const { loading, data } = useQuery(LISTINGS);
  const [selectedImage, setSelectedImage] = useState(0);
  const [comics, setComics] = useState([]);
  let images = [];
  // const { posts } = state;
  useEffect(() => {
    if (!loading) {
      console.log('not loading');
      setComics([...data.posts]);
      // dispatch({
      //   type: UPDATE_POSTS,
      //   posts: data.posts
      // });
    } else {
      console.log('still loading')
    }
  }, [loading, data]);

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
      <button onClick={() => console.log(state)}>check</button>
      <button onClick={() => toast('hello world', { duration: 4000, position: 'top-center' })}>Notify</button>
    </div >
  );
}
