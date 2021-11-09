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
import AssignmentIcon from "@mui/icons-material/Assignment";

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

export default function RecipeReviewCard({ image, title, description }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        bgcolor: "#d7c5b7",
        border: "2px solid #385059",
        boxShadow: "3px 4px 1px #4f999d",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "green" }}
            aria-label="collection"
          >
            <AssignmentIcon />
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
      />
      {/* <Typography variant="h6" align="center">
        {title}
      </Typography> */}
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          API data snapshot
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to wishlist">
          <FavoriteIcon />
        </IconButton>
        {/* <Typography variant="subtitle1">Add to Wishlist</Typography> */}

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
          <Typography paragraph>Title: {title}</Typography>
          <Typography paragraph>Synopsis: {description}</Typography>
          {/* <Typography paragraph>Price:{}</Typography> */}
          <Typography paragraph>Open to Trades:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
