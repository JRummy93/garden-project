import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const PlantCard = ({ common_name, scientific_name, image_url }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image_url}
          alt="default plant image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {common_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {scientific_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to My Garden
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlantCard;
