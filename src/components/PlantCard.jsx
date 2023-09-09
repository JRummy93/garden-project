import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PlantCard = () => {
  return <div>This is a plant card</div>;
};


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/green-plant.jpg"
        title="green plant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plant Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Characteristics of this plant
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default PlantCard;
