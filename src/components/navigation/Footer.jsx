import React from "react";
// import { Link } from "react-router-dom";
// import { Info} from "@mui/icons-material";
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

export default function Footer() {
  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ minHeight: "212px", backgroundColor: "#333" }}
        className="pt-5"
      >
        <Container>
        <Grid
          container
          item
          sm={12}
          xs={12}
          justify="space-between"
          className="pb-5"
        >
             <Grid item sm={3} xs={12}>
          <List>
              <ListItem
                sx={{
                  fontWeight:"bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                American Info Systems Inc.
              </ListItem>
              <Divider />
              <ListItem>DBA Training</ListItem>
              <ListItem>Software QA Training</ListItem>
            </List>
          </Grid>
          <Grid item sm={3} xs={12}>
            <List>
              <ListItem
                sx={{
                  fontWeight:"bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                SERVICES
              </ListItem>
              <Divider />
              <ListItem sx={{color:"#f18b32"}}>Consulting Services</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Database Services</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Networking Services</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Staffing Services</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Testing Services</ListItem>
            </List>
          </Grid>
          <Grid item sm={3} xs={12}>
            <List>
              <ListItem
                sx={{                
                  fontWeight:"bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                SOLUTIONS
              </ListItem>
              <Divider />
              <ListItem sx={{color:"#f18b32"}}>Data Warehouse</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Business Intelligence (BI)</ListItem>
              <ListItem sx={{color:"#f18b32"}}>E-Business</ListItem>
            </List>
          </Grid>
          <Grid item sm={3} xs={12}>
            <List>
              <ListItem
                sx={{
                  fontWeight:"bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                TRAINING
              </ListItem>
              <Divider />
              <ListItem sx={{color:"#f18b32"}}>DBA Training</ListItem>
              <ListItem sx={{color:"#f18b32"}}>Software QA Training</ListItem>
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
          <Typography variant="caption">@ Copyright 2022 American Info Systems Inc. All Rights Reserved​.</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
