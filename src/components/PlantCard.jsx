import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/router";
import AddToGarden from "./AddToGarden";

const PlantCard = ({ common_name, scientific_name, image_url, id }) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 500, maxHeight: 500 }} key={id}>
      <CardActionArea
        onClick={() => {
          router.push(`/explore/${id}`);
        }}
      >
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
            {scientific_name} ID: {id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddToGarden 
        PlantId={id}
        />
      </CardActions>
    </Card>
  );
};

export default PlantCard;
