import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "react-bootstrap";
import firebase from "../../firebaseConfig";
import SendIcon from "@mui/icons-material/Send";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [rating, setRating] = React.useState("");
  const [comment, setComment] = React.useState("");
  console.log(name, email, mobile, rating, comment);

  const submit = (e) => {
    e.preventDefault();
    if (name && email && mobile && rating && comment) {
      firebase
        .app("main")
        .firestore()
        .collection("testimonials")
        .add({ name, email, mobile, rating, comment })
        .then(() => {
          alert("Your suggestion posted successfully.");
          setName("");
          setEmail("");
          setMobile("");
          setRating("");
          setComment("");
        });
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="pt-2 container">
      <Card className="p-5">
        <Form onSubmit={(e) => submit(e)}>
          <Grid container spacing={2}>
            <Grid xs={12} md={6} p={4}>
              <TextField
                className="w-100"
                label="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid xs={12} md={6} p={4}>
              <TextField
                className="w-100"
                label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid xs={12} md={6} p={4}>
              <TextField
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                className="w-100"
                label="Phone"
                type="number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Grid>
            <Grid xs={12} md={6} p={4}>
              <Typography component="legend">Select Rating</Typography>

              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Grid>
            <Grid  p={4} md={12}>
              <TextField
                id="outlined-textarea"
                label="Your feedback or suggestion"
                placeholder="Your feedback or suggestion is valuable to us."
                multiline
                fullWidth
                onChange={(e) => setComment(e.target.value)}
              />
            </Grid>
          </Grid>

          <div className="pt-5 container">
            <Button
              variant="contained"
              className="text-left btn-contact"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
