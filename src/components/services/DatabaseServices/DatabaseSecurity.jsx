import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function DatabaseSecurity() {
  return (
    <div className="pt-2"> 
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">Database Security</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              Database security includes a variety of measures used to secure
              database management systems from malicious cyber-attacks and
              illegitimate use. Database security programs are designed to
              protect not only the data within the database, but also the data
              management system itself, and every application that accesses it,
              from misuse, damage, and intrusion.
              <br />
              AIS offer software as well as hardware security solutions to
              comply with SOX as well as to keep the data safe. Depending on the
              database size and activity various hardware and software solutions
              are recommended.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../database/Database Security.svg"
              alt="Database Security system"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
