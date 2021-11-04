import { Divider, Grid, Typography, Button, Box } from "@mui/material";
import React from "react";

function Info({
  title,
  issueNo,
  description,
  publishedYear,
  price,
  category,
  forSale,
}) {
  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="h5">${price}</Typography>
      </Box>
      <Button variant="contained" color="primary" style={{ marginTop: "auto" }}>
        Purchase
      </Button>
      <Button variant="contained" color="warning" style={{ marginTop: "5px" }}>
        Offer Trade
      </Button>
    </Grid>
  );
}

export default Info;
