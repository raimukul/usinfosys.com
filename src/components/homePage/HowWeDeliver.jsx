import React from "react";
import "./HowWeDeliver.css";
import { Typography } from "@mui/material";

const deliveryData = [
  {
    id: 1,
    imgLink:
      "./assests/homepage/management.svg",
    name: "Outstanding Management",
    alt: "Robert Garrison image",
    designation: "Android Developer",
    comment:
      "The management of AIS has extensive knowledge of every area of the IT project support and staffing industries, spanning many years. The entire staff is structured and laser-focused on proactively providing you and your company with outstanding services.",
  },
  {
    id: 2,
    imgLink:
      "./assests/homepage/relationship1.svg",
    name: "Outstanding Relationships",
    alt: "Jeffery Kennan image",
    designation: "Full Stack Developer",
    comment:
      " In order to offer you better services, we build strong relationships with you and your company. Through these ties, we are able to learn about your business, goals, and needs, which enables us to offer you accurate and timely services. We listen carefully and pose smart questions.",
  },
  {
    id: 3,
    imgLink:
      "./assests/homepage/talent.svg",
    name: "Outstanding Talent",
    alt: "Issac Maxwell image",
    designation: "Finance Director",
    comment:
      "Our compelling value proposition draws top talent. Our consultants are confident in their capacity to function successfully and efficiently in actual business settings because they have years of real-world experience in their respective IT specialties. They are extremely talented team members who put the needs of their clients first.",
  },
];

export default function HowWeDeliver() {
  return (
    <div>
      <div className="jumbotron howdeliver"> 
      <div className="container pt-5 pb-5">
        <Typography variant="h4" color="white" pt={2} pb={5} align="center">
        HOW WE ACHIEVE
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
                    {/* <div className="designation">{TData.designation}</div> */}
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
