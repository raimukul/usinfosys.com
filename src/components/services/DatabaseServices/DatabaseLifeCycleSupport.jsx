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

const dataBaseServices = [
  { id: 2, dbService: "High Availability" },
  { id: 3, dbService: "Performance and Scalability" },
  { id: 4, dbService: "Security" },
  { id: 5, dbService: "Total Cost of Ownership (TCO)" },
  { id: 6, dbService: "Business Intelligence" },
  { id: 7, dbService: "Developer productivity" },
  { id: 8, dbService: "Support of 3rd party tools" },
];
export default function DatabaseLifeCycleSupport() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2}>
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">Database Life Cycle Support</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              AIS experienced consultants can be involved at any phase of the
              Database Life Cycle and can help you in deciding to choose the
              right database for your organization depending on your
              requirements. The key factors used to evaluate different database
              are
              <br />
              <List aria-label="contacts">
                {dataBaseServices.map((DBService) => {
                  return (
                    <ListItem disablePadding key={DBService.id}>
                      <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={DBService.dbService} />
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../database/Database Life Cycle Support.svg"
              alt="Database Management system"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
