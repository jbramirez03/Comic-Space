import React, { Component } from "react";
import Button from "@mui/material/Button";
import ComicCard from "./ComicCard";

class ViewCollection extends Component {
  state = {
    visibile: false,
  };
  render() {
    return (
      <div>
        {this.state.visible ? <ComicCard /> : null}
        <Button
          variant="contained"
          color="success"
          sx={{ width: "20%", height: "100%", margin: "3px" }}
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          View
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "20%", height: "100%", margin: "3px" }}
          onClick={() => {
            this.setState({ visible: false });
          }}
        >
          Hide
        </Button>
      </div>
    );
  }
}

export default ViewCollection;
