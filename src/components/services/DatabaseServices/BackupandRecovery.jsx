import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

export default function BackupandRecovery() {
  return (
    <div className="pt-2">
      <Container>
        <Card className="p-2">
          <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={4}>
              <img
                src="./database/Backup and Recovery.svg"
                alt="Backup and Recovery"
                className="w-100 display-block ml-auto mr-auto"
              ></img>
            </Grid>
            <Grid item sm={12} md={8}>
              <Typography variant="h5">Backup and Recovery</Typography>
              <Divider className="bg-dark w-25" variant="string" />
              <Typography>
                The Back-up and Recovery Service entails one or more AIS’s
                consultants working either On-site or remotely to implement an
                enterprise quality and vendor (Oracle, IBM, Microsoft)
                recommended procedure for ensuring that, in the event of a
                catastrophe, your data can be quickly, safely, and fully
                recovered. AIS first review exactly how the database is being
                used by existing applications and how it might be used by future
                applications. Analysis of existing IT resources and backup
                strategies is undertaken next. Once all relevant information has
                been collected, AIS will design and implement a custom-tailored,
                multi-tiered Database Backup and Recovery strategy. Finally,
                before calling the job complete, AIS performs rigorous failure
                and recovery testing, ensuring that all implemented recovery
                processes in fact hold up under actual failure scenarios. It is
                suggested that the customer contract with AIS on a semi-annual
                basis so that the backup solution can be reviewed and tested for
                continued efficacy.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
