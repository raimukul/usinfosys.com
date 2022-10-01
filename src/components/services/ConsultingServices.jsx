import { Card, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function ConsultingServices() {
  return (
    <div>
      <Container>
        <Card className="p-2">
          <Typography variant="h5">Our IT Consulting Services</Typography>
          <Divider className="bg-dark w-25" variant="string" />
          <Grid container spacing={3} className="pt-5">
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/technology.png"
                alt="1q"
                ></img>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/risks.png"
                alt="ef"
                ></img>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/infrastructure.png"
                alt="rgtg"
                ></img>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/execution.png"
                alt="gade"
                ></img>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/quality-test.png"
                alt="asrgtaewg"
                ></img>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
