import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function ConsultingServices() {
  return (
    <div>
      <Card className="p-4">
        <Typography variant="h5">Our IT Consulting Services</Typography>
        <Divider className="bg-dark w-25" variant="string" />
        <Typography className="pt-2" variant="body1">
          AIS enables success in essential strategic endeavors that transform
          enterprises by aligning IT strategy and priorities to their business
          objectives. We deliver practical advice and fast performing solutions
          by leveraging our industry insight and unrivalled technology
          expertise.
          <br />
          AIS’s IT consulting services include:
        </Typography>
        <Grid container spacing={3} className="pt-5">
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/technology.png"
                alt="1q"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                Architecture and Technology
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/risks.png"
                alt="ef"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                Information Risk Management
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/infrastructure.png"
                alt="rgtg"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                Infrastructure Services
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/information-management.png"
                alt="gade"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                IT Process and Service Management
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/execution.png"
                alt="asrgtaewg"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                IT Strategy and Governance
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <img
                className="w-50 rounded mx-auto d-block"
                src="../services/quality-test.png"
                alt="asrgtaewg"
              ></img>
              <Typography className="text-center pt-2 pb-2">
                Quality Assurance and Testing
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
