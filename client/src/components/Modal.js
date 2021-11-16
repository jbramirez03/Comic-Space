import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { POST_COMIC } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  card: {
    padding: "10px",
  },
};

export default function BasicModal({ title, description, image, comicId }) {
  const [price, setPrice] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [postComic] = useMutation(POST_COMIC);

  const handleSubmit = async () => {
    const comicToPost = { comicId, title, description, image, tradeable: check, price };
    // console.log(comicToPost);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    // Add the input for the mutation save_book in a variable object set to bookToSave
    try {
      await postComic({
        variables: { input: comicToPost },
      });

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="warning"
        sx={{ mb: "5px" }}
      >
        List Comic
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card align="center" sx={{ padding: "15px", bgcolor: "#ecdac8" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select Listing Options
            </Typography>
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              name="price"
              label="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="string"
              id="price"
            // autoComplete="current-password"
            />
            <Typography
              id="modal-modal-description"
              variant="h6"
              sx={{ mt: 2 }}
            >
              Open to Trades:
            </Typography>
            <Checkbox type='checkbox' value={check} onChange={e => setCheck(e.currentTarget.checked)} />
          </Card>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
