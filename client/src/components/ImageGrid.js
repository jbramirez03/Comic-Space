import { Grid } from "@mui/material";
import React from "react";

function ImageGrid({ images = [], onSelect, selectedImage }) {
  return (
    <Grid container direction="column">
      {images.map((image, index) => (
        <img
          src={image}
          height={100}
          alt="listing"
          onClick={() => onSelect(index)}
          style={{
            border:
              index === selectedImage ? "solid 2px blue" : "solid 2px white",
            padding: "5px",
            cursor: "pointer",
          }}
        />
      ))}
    </Grid>
  );
}

export default ImageGrid;
