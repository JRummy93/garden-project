import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Typography, Button, Stack, TextField, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const router = useRouter();

  const [review, setReview] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [rating, setRating] = useState(4);

  async function submitReview() {
    const response = await fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({ ...review, rating }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Navbar />
      <div className="contact">
        <Stack className="textFieldStack" margin={6} display={"flex"} justifyContent={"center"}>
          <Typography variant="h3" textAlign={"center"} color={"primary.dark"}>
          {" "}
          Contact Us{" "}
        </Typography>
        <br />
          <Typography variant="h5" textAlign={"center"}>
            Have any ideas for our improvement or just want to tell us how great
            we are? We&apos;d love to hear from you!{" "}
          </Typography>
          <TextField
            variant="filled"
            label="Name"
            required
            margin="normal"
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
          />
          <TextField
            variant="filled"
            label="Email"
            required
            margin="normal"
            type="email"
            value={review.email}
            onChange={(e) => setReview({ ...review, email: e.target.value })}
          />
          <TextField
            variant="filled"
            label="Phone Number"
            margin="normal"
            value={review.phone}
            onChange={(e) => setReview({ ...review, phone: e.target.value })}
          />
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
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          />
          <Button variant="contained" onClick={submitReview}>
            Submit
          </Button>
        </Stack>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
