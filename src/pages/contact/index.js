import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import {
  Typography,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const router = useRouter();

  const [rating, setRating] = useState(4);

  return (
    <>
      <Navbar />
      <div className="contact">
        <Stack className="textFieldStack" margin={6}>
          <Typography variant="h3" textAlign={"center"} color={"primary.dark"}>
            {" "}
            Contact Us{" "}
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            Have any ideas for our improvement or just want to tell us how great
            we are? We'd love to hear from you!{" "}
          </Typography>
          <TextField variant="filled" label="Name" required margin="normal" />
          <TextField
            variant="filled"
            label="Email"
            required
            margin="normal"
            type="email"
          />
          <TextField variant="filled" label="Phone Number" margin="normal" />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <TextField
            variant="filled"
            label="Comment"
            multiline
            rows={6}
            margin="normal"
          />
          <Button variant="contained">Submit</Button>
        </Stack>
      </div>
    </>
  );
};
export default Contact;
