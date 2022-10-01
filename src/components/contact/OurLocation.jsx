import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import { Container } from "@mui/system";
import React from "react";

export default function OurLocation() {
  return (
    <div>
      <Container>
        <div className="pt-2">
          <Card>
            <CardHeader
              title="Our Locations"
              className="bg_footer"
            ></CardHeader>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card className="p-2">
                    <Typography variant="h5">USA</Typography>
                    <Divider className="bg-dark" variant="inset" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationOnIcon color="info" />
                        </Avatar>
                      </ListItemAvatar>
                      <Typography variant="p">
                        7300 W 110th Street,
                        <br />
                        Suit 700, Overland Park, <br /> KS-66213"
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneIcon color="info" />
                        </Avatar>
                      </ListItemAvatar>
                      <a
                        href="tel:+19137359270"
                        className="text-decoration-none"
                      >
                        <Typography variant="p">(913) 735-9270</Typography>
                      </a>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FaxIcon color="info" />
                        </Avatar>
                      </ListItemAvatar>
                      <a
                        href="fax:+19134269151"
                        className="text-decoration-none"
                      >
                        <Typography variant="p">(913) 426-9151</Typography>
                      </a>
                    </ListItem>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="p-2">
                    <Typography variant="h5">India</Typography>
                    <Divider className="bg-dark" variant="inset" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationOnIcon color="info" />
                        </Avatar>
                      </ListItemAvatar>
                      <Typography variant="p">
                        A-9, New Sama Road,
                        <br />
                        Vadodara,
                        <br />
                        Gujarat – 390002
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneIcon color="info" />
                        </Avatar>
                      </ListItemAvatar>
                      <a
                        href="tel:+912652771900"
                        className="text-decoration-none"
                      >
                        <Typography variant="p">+91-265-2771900</Typography>
                      </a>
                    </ListItem>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
