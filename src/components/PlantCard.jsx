import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/router";

import { useAuth, SignIn, SignInButton, SignUpButton } from "@clerk/nextjs";

const PlantCard = ({ common_name, scientific_name, image_url, id }) => {
  const router = useRouter();

  const { userId } = useAuth();

  return (
    <Card sx={{ maxWidth: 500, maxHeight: 500 }} key={id}>
      <CardActionArea
        // onClick={() => {
        //   router.push(`/explore/${id}`);
        // }}
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
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        {userId ? (
          <Button
            className="addBtn"
            size="small"
            sx={{
              padding: "0.5rem 1rem",
              fontFamily: "Montserrat, sans-serif",
              color: "primary",
            }}
          >
            Add to My Garden
          </Button>
        ) : (
          <SignUpButton mode="modal">
            <Button
              className="addBtn"
              size="small"
              sx={{
                padding: "0.5rem 1rem",
                fontFamily: "Montserrat, sans-serif",
                color: "primary",
              }}
            >
              Add to My Garden
            </Button>
          </SignUpButton>
        )}
      </CardActions> */}
    </Card>
  );
};

export default PlantCard;
