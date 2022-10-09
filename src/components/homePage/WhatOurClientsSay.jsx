import React from "react";
import "./WhatOurClientsSay.css";
import {Grid, Rating, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const testimonialData = [
  {
    id: 1,
    imgLink:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=8",
    name: "Robert Garrison",
    alt: "Robert Garrison image",
    designation: "Android Developer",
    rating: 4,
    comment:
      "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.",
  },
  {
    id: 2,
    imgLink:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Jeffery Kennan",
    alt: "Jeffery Kennan image",
    designation: "Full Stack Developer",
    rating: 5,
    comment:
      " Really good, you have saved our business! I made bacck the purchase price in just 48 hours! man, this thing is getting better and better as I learn more about it.",
  },
  {
    id: 3,
    imgLink:
      "https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Issac Maxwell",
    alt: "Issac Maxwell image",
    designation: "Finance Director",
    rating: 5,
    comment:
      " Account keeper is the most valuable business research we have EVER purchased. Without electrician, we would ahave gone bankrupt by now.",
  },
];

export default function WhatOurClientsSay() {
  return (
    <div>
      <div className="jumbotron testimonialbg">
        <div className="container">
        <div className="p-3 bg-transparent">
          <Typography variant="h4" color="orange" pt={2} pb={5} align="center">
            What Our Clients Say
          </Typography>
          <Typography variant="h6" color="" pt={2} pb={2}>
            We are really fortunate to have developed strong relationships with
            many of our customers. And we've developed genuine friendships with
            them in addition to our job relationships. Here are their comments
            regarding us.
          </Typography>
          <Carousel className="h-auto pb-3 pt-3" controls={false} indicators={false}>
            {testimonialData.map((TData) => {
              return (
                <Carousel.Item interval={1000} key={TData.id}>
                  <Grid container spacing={2} justify="space-between">
                    <Grid item sm={12} md={4} className="m-auto">
                      <img
                        src={TData.imgLink}
                        alt={TData.alt}
                        className="w-100 display-block ml-auto mr-auto"
                      ></img>
                    </Grid>
                    <Grid item sm={12} md={8} className="m-auto">
                      <figure className="text-center">
                        <Rating name="read-only" value={TData.rating} readOnly />
                        <blockquote className="blockquote">
                          <p>{TData.comment}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          <cite title="Source Title">{TData.name}</cite>
                          <br />
                          <cite title="Source Title">{TData.designation}</cite>
                        </figcaption>
                      </figure>
                    </Grid>
                  </Grid>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        </div>
      </div>
    </div>
  );
}
