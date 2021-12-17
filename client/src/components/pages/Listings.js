import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
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
import ImageGrid from "../ImageGrid";
import MainImage from "../MainImage";
import Info from "../Info";
import { useQuery } from '@apollo/client';
import { LISTINGS } from '../../utils/queries';

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cd7DRs9mD27SGqwah_h6jxbEoDcw_BWJdw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5JdSeAjBja90N3xnvNP4S1rdWOMgD8bjeg&usqp=CAU",
];

const comic = {
  title: "Amazing Fantasy",
  issueNo: "15",
  description: "The first appearance of Spider-Man",
  publishedYear: 1962,
  price: "1,500,000.00",
  category: "Golden Age Comics",
  forSale: true,
};

export default function Listings() {
  const { loading, data } = useQuery(LISTINGS);
  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) {
    return (
      <div>LOADING...</div>
    )
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
          <Info {...comic} />
        </Grid>
      </Grid>
      {!loading ? data.posts.map((post, i) => {
        return (
          <div key={i}>
            <p>{post.title}</p>
            <p>{post.comicId}</p>
            <p>{post.description}</p>
            <p>{post.image}</p>
            <p>{post.price}</p>
            <p>{post.tradeable ? 'true' : 'false'}</p>
          </div>
        )
      }) : ''}
      <button onClick={() => console.log(data)}>Check</button>
    </div>
  );
}
