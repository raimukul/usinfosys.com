import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function DatabaseArchitectureandDesign() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../database/Database Architecture and Design.svg"
              alt="Database Architecture and Design"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5" component={"span"}>
              Database Architecture and Design
            </Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography component={"span"}>
              A Database Architecture is a representation of DBMS design. It
              helps to design, develop, implement, and maintain the database
              management system. A DBMS architecture allows dividing the
              database system into individual components that can be
              independently modified, changed, replaced, and altered.
              <br />
              AIS can help you in designing your physical as well as logical
              design of your database. Our consultants have gathered experience
              designing fortune 500 company’s database ranging from 50 GB to 10
              TB for OLTP, Data warehousing and Data Mart solutions.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
