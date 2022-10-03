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

const dataBase = [
  { id: 1, dbType: "Oracle" },
  { id: 2, dbType: "SQL Server" },
  { id: 3, dbType: "DB2" },
  { id: 4, dbType: "MySQL" },
  { id: 5, dbType: "Microsoft Access" },
  { id: 6, dbType: "FileMaker Pro" },
];

export default function DataBaseManagement() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../database/Database Management.svg"
              alt="Database Management system"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
          <Grid item sm={12} md={8}>
            <Typography variant="h5">Database Management </Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography variant="">
              We provide comprehensive database service for following desktop
              and enterprise relational databases:
              <br />
              <List aria-label="contacts">
                {dataBase.map((DBType) => {
                  return (
                    <ListItem disablePadding key={DBType.id}>
                      <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={DBType.dbType} />
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
