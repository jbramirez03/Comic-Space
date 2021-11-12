import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Grid from "@mui/material/Grid";

import Skeleton from "@mui/material/Skeleton";

const cardStyle = {
  frontSide: {
    backgroundColor: "transparent",
    border: "2px solid #531c28",
    borderRadius: "5px",
    boxShadow: "3px 3px 4px grey",
    height: "100%",
    width: "100%",
  },
};

const skeletonRender = {
  wave: {
    margin: "auto",
  },
};

function Shadow() {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Flippy>
        <FrontSide style={cardStyle.frontSide}>
          <Skeleton
            variant="rectangular"
            width={210}
            height={218}
            style={skeletonRender.wave}
          />
          <Skeleton animation="wave" width={210} style={skeletonRender.wave} />
          <Skeleton animation="wave" width={210} style={skeletonRender.wave} />
          <Skeleton animation="wave" width={210} style={skeletonRender.wave} />
        </FrontSide>
      </Flippy>
    </Grid>
  );
}

export default Shadow;
