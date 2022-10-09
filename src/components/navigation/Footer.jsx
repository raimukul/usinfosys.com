import React from "react";
import {
  AppBar,
  Divider,
  Grid,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import "./Navigation.css";

const ftServices = [
  {
    id: 1,
    serviceName: "Consulting Services",
    link: "/services/consulting-services",
  },
  {
    id: 2,
    serviceName: "Database Services",
    link: "/services/database-services",
  },
  {
    id: 3,
    serviceName: "Networking Services",
    link: "/services/networking-services",
  },
  {
    id: 4,
    serviceName: "Staffing Services",
    link: "/services/staffing-services",
  },
  {
    id: 5,
    serviceName: "Testing Services",
    link: "/services/testing-services",
  },
];
const ftSolution = [
  {
    id: 6,
    serviceName: "Testing and Quality Control",
    link: "/solution/testing-quality",
  },
  {
    id: 7,
    serviceName: "Data Warehouse",
    link: "/solution/dataware-house",
  },
  {
    id: 8,
    serviceName: "Business Intelligence (BI)",
    link: "/solution/business-intelligence",
  },
  {
    id: 9,
    serviceName: " E-business",
    link: "/solution/e-business",
  },
];

const ftLinks = [
  {
    id: 10,
    serviceName: "Important link 1",
    link: "/solution/testing-quality",
  },
  {
    id: 32,
    serviceName: "Important link 2",
    link: "/solution/dataware-house",
  },
  {
    id: 33,
    serviceName: "Important link 3",
    link: "/solution/business-intelligence",
  },
  {
    id: 34,
    serviceName: "Important link 4",
    link: "/solution/e-business",
  },
];
export default function Footer() {
  return (
    <div>
      <Grid container justify="center" className="pt-5 bg_footer">
        <Container>
          <Grid
            container
            item={true}
            sm={12}
            xs={12}
            justify="space-between"
            className="pb-5"
          >
            <Grid sm={3} xs={12} item={true}>
              <List>
                <ListItem>
                  <img
                    src="../banner/Logo4.png"
                    alt="logo"
                    className="w-75 m-auto"
                  ></img>
                </ListItem>
                <Divider />
                <ListItem className="text-lg-left text-md-left text-center">
                  A woman-owned business with commitment to provide the quality
                  services to our clients.
                </ListItem>
              </List>
            </Grid>
            <Grid sm={3} xs={12} item={true}>
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "orange",
                    textDecoration: "none",
                  }}
                >
                  SERVICES
                </ListItem>
                <Divider />
                {ftServices.map((SVType) => {
                  return (
                    <Link to={SVType.link} key={SVType.id} className="aFooter">
                      <ListItem key={SVType.id}>{SVType.serviceName}</ListItem>
                    </Link>
                  );
                })}
              </List>
            </Grid>
            <Grid item={true} sm={3} xs={12}>
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "orange",
                    textDecoration: "none",
                  }}
                >
                  SOLUTIONS
                </ListItem>
                <Divider />
                {ftSolution.map((ImpLink) => {
                  return (
                    <Link
                      to={ImpLink.link}
                      key={ImpLink.id}
                      className="aFooter"
                    >
                      <ListItem key={ImpLink.id}>
                        {ImpLink.serviceName}
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Grid>
            <Grid item={true} sm={3} xs={12}>
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "orange",
                    textDecoration: "none",
                  }}
                >
                  Important Links
                </ListItem>
                <Divider />
                {ftLinks.map((ImpLink) => {
                  return (
                    <Link
                      to={ImpLink.link}
                      key={ImpLink.id}
                      className="aFooter"
                    >
                      <ListItem key={ImpLink.id}>
                        {ImpLink.serviceName}
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        className="bg_footer"
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} Copyright: American Info Systems
            Inc. All Rights Reserved​.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
