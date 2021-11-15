import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ image, title, description, handleRemove, comicId }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: "10px",
          bgcolor: "#385059",
          color: "white",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
              <PlaylistAddCheckIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt="collected comic"
        />

        <CardActions disableSpacing>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ marginLeft: "auto" }}
          >
            Details:
          </Typography>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <strong>Title:</strong> {title}
            </Typography>
            <Typography paragraph>
              <strong>Synopsis:</strong> {description}
            </Typography>
            <Button onClick={() => handleRemove(comicId)} variant='contained'>Remove</Button>
            {/* <Typography paragraph>Price:{}</Typography> */}
            {/* <Typography paragraph>Open to Trades:</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
