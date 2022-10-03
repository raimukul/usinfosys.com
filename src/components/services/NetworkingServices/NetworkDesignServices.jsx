import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function NetworkDesignServices() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../networking/Network Design Services.svg"
              alt="Network Design Services"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">Network Design Services</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              We can recommend the best and most reliable computer connections,
              choose the wiring that will take you into the future, and help you
              make informed buying decisions for dependable, reliable, and
              cost-effective connection equipment.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
