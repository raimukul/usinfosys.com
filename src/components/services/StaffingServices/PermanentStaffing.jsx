import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function PermanentStaffing() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../../assests/services/permanent staffing bg.svg"
              alt="Network Design Services"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">Permanent Staffing</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              In, Permanent Staffing, we primarily address employee requirements
              for Fresher, Junior and Middle level staff. We tender the quick
              and easy availability of manpower resources to our clients and
              fulfill their immediate requirements. Our expertise across the
              industries helps us to furnish quality staffing solutions for all
              business verticals.
              <br />
              AIS makes the manpower resources available with ease, bearing in
              mind the skill-set required as per the clients directives. We aid
              the organizations by fulfilling their manpower requirements and
              provide them the necessary acumen to be flexible, cost-effective,
              and competitive. Our past staffing endeavors have set us apart as
              constant result-driven performers, delivering on time.
              <br />
              If your choice is permanent employment with an organization, be
              rest assured that we will work with you to offer the best
              opportunities for your career. Our team will make the effort to
              know you, your abilities and your goals in order to equip you with
              the right resources. Our expertise and experience will ensure you
              a head start in finding jobs before they are posted.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
