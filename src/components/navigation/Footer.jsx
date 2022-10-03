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
    id: 11,
    serviceName: "Consulting Services",
    link: "/services/consulting-services",
  },
  {
    id: 22,
    serviceName: "Database Services",
    link: "/services/database-services",
  },
  {
    id: 33,
    serviceName: "Networking Services",
    link: "/services/networking-services",
  },
  {
    id: 44,
    serviceName: "Staffing Services",
    link: "/services/staffing-services",
  },
  {
    id: 55,
    serviceName: "Testing Services",
    link: "/services/testing-services",
  },
];
const ftSolution = [
  {
    id: 31,
    serviceName: "Testing and Quality Control",
    link: "/services/consulting-services",
  },
  {
    id: 32,
    serviceName: "Data Warehouse",
    link: "/services/database-services",
  },
  {
    id: 33,
    serviceName: "Business Intelligence (BI)",
    link: "/services/networking-services",
  },
  {
    id: 34,
    serviceName: " eBusiness",
    link: "/services/staffing-services",
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
                {ftSolution.map((SolType) => {
                  return (
                    <Link
                      to={SolType.link}
                      key={SolType.id}
                      className="aFooter"
                    >
                      <ListItem key={SolType.id}>
                        {SolType.serviceName}
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
                  TRAINING
                </ListItem>
                <Divider />
                <ListItem sx={{ color: "#f18b32" }}>DBA Training</ListItem>
                <ListItem sx={{ color: "#f18b32" }}>
                  Software QA Training
                </ListItem>
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
