import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

export default function DatabaseSecurity() {
  return (
    <div className="pt-2">
      <Container>
        <Card className="p-2">
          <Grid container spacing={2} justify="space-between">
            
            <Grid item sm={12} md={8}>
              <Typography variant="h5">Database Security</Typography>
              <Divider className="bg-dark w-25" variant="string" />
              <Typography>
                AIS offer software as well as hardware security solutions to
                comply with SOX as well as to keep the data safe. Depending on
                the database size and activity various hardware and software
                solutions are recommended.
              </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
              <img
                src="./database/Database Security.svg"
                alt="Database Security system"
                className="w-100 display-block ml-auto mr-auto"
              ></img>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
