import React from "react";
import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const netService = [
  { id: 21, service: "LAN & WAN management" },
  { id: 22, service: "WLAN management" },
  { id: 23, service: "Unified Communications" },
  { id: 24, service: "VoIP" },
  { id: 25, service: "IP Contact Center management" },
  { id: 26, service: "Network Operations Center" },
  { id: 27, service: "Network System Integration Services" },
  { id: 28, service: "Network Consulting Services" },
  { id: 29, service: "Network Implementation Services" },
];

export default function NetworkMaintenanceServices() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={8}>
            <Typography variant="h5">Network Maintenance Services</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              We offer dependable, service-oriented technicians you can call on
              to help out with day-to-day computer problems. They’ll also
              perform quality, dependable backups to prevent expensive loss of
              data; monitor the health of your network to make sure you’re not
              running out of storage space; and ensure that viruses are not
              slowing down or deleting valuable data on your system. Hardware
              Sales Hardware Sales We’ll help you buy a computer system that
              will work for your business by educating you about the performance
              and cost benefits of various printers, scanners, and other
              computer accessories.
            </Typography>
            <List aria-label="contacts">
              {netService.map((NType) => {
                return (
                  <ListItem disablePadding key={NType.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={NType.service} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../networking/Network Maintenance.svg"
              alt="Network Maintenance Services"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
