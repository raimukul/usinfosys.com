import { Card, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function ConsultingServices() {
  return (
    <div>
      <Container>
        <div className="pt-2">
          <Card className="p-4">
          <Typography variant="h5">Consulting Services</Typography>
          <Divider className="bg-dark w-25" variant="string" />
            <Typography className="pt-2" variant="body1">
              AIS Consulting Services help clients solve their Software Quality
              Assurance challenges and achieve the quality goal. Our Consulting
              offerings are based on years of progressive experience assisting
              customers to meet their quality needs. Software Testing Services
              of AIS consulting services offering is delivered by a team of
              consultants including architects and specialists with in-depth
              industry, business, technology, and quality process. These
              seasoned consultants have empowered a range of companies to
              embrace industry leading technologies that align with their unique
              quality goals. We help clients to identify and implement best
              practice solutions to address the unique business challenges.
              These efficiently delivered solutions help you transform your
              business with targeted investments toward growth, optimized
              efficiency and predictable total cost of ownership (TCO), and
              well-managed risk and compliance around business operations.
            </Typography>
          </Card>
        </div>
        <Card className="p-4">
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
                <Typography className="text-center pt-2 pb-2">
                  Architecture and Technology
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <img
                  className="w-50 rounded mx-auto d-block"
                  src="./services/risks.png"
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
                  src="./services/infrastructure.png"
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
                  src="./services/execution.png"
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
                  src="./services/quality-test.png"
                  alt="asrgtaewg"
                ></img>
                <Typography className="text-center pt-2 pb-2">
                  IT Strategy and Governance
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
