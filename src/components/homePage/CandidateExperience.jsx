import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CandidateExperience() {
  return (
    <div className="bg-clientEx">
      <div className="container">
        <Grid container spacing={2} p={3}>
          <Grid item lg={4} className="m-auto">
            <img
              className="img-fluid"
              alt="candidate experience"
              src="../../assests/homepage/candidate.webp"
            ></img>
          </Grid>
          <Grid item lg={8}>
            <Typography
              variant="h4"
              color="orange"
              pt={2}
              pb={5}
              align="center"
            >
              Candidate Experience
            </Typography>
            <blockquote className="blockquote">
              <p>
                AIS provides a professional, respectful and efficient service to
                all candidates. We know being in the market for a new position
                can mean talking to countless staffing firms and recruiters each
                day. When you work with us, you can sit back and relax.
              </p>
            </blockquote>
            <Link to="/career/current-opening" className="text-decoration-none">
              <Button className="btn-contact">Search Jobs</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
