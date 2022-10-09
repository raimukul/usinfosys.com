import React from "react";
import "./HowWeDeliver.css";
import { Typography } from "@mui/material";

const deliveryData = [
  {
    id: 1,
    imgLink:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=8",
    name: "Robert Garrison",
    alt: "Robert Garrison image",
    designation: "Android Developer",
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
    comment:
      " Account keeper is the most valuable business research we have EVER purchased. Without electrician, we would ahave gone bankrupt by now.",
  },
];

export default function HowWeDeliver() {
  return (
    <div>
      <div className="jumbotron howdeliver"> 
      <div className="container pt-5 pb-5">
        <Typography variant="h4" color="white" pt={2} pb={5} align="center">
          About Us
        </Typography>
        <div className="row">
          {deliveryData.map((TData) => {
            return (
              <div className="col-lg-4" key={TData.id}>
                <div className="card">
                  <div className="face front-face">
                    <img
                      src={TData.imgLink}
                      alt={TData.alt}
                      className="profile"
                    ></img>
                    <div className="pt-3 text-uppercase name">{TData.name}</div>
                    <div className="designation">{TData.designation}</div>
                  </div>
                  <div className="face back-face">
                    <span className="fas fa-quote-left"></span>
                    <div className="testimonial">{TData.comment}</div>
                    <span className="fas fa-quote-right"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
