import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ClientExperience() {
  return (
    <div className="bg-clientEx">
      <div className="container">
        <Grid container spacing={2} p={3}>
          <Grid item lg={8}>
            <Typography
              variant="h4"
              color="orange"
              pt={2}
              pb={5}
              align="center"
            >
              Client Experience
            </Typography>
            <blockquote className="blockquote">
              <p>
                AIS believes in building valuable relationships with our
                clients, which is why we work in long-standing recruitment
                partnerships with some of the world’s largest enterprises.
                <br />
                Collaboration is central to our customer service. We know what
                our clients do and don’t like when it comes to their staffing
                needs, which is why their testimonials of AIS are positive and
                consistent.
                <br />
                If you need employees, we guarantee to provide only the best.
              </p>
            </blockquote>
            <Link to="/contact" className="text-decoration-none">
              <Button className="btn-contact">Contact Us</Button>
            </Link>
          </Grid>
          <Grid item lg={4} className="m-auto">
            <img
              alt="client experience"
              className="img-fluid"
              src="../../assests/homepage/closeup.webp"
            ></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
