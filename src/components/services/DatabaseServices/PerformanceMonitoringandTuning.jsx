import React from "react";
import { Card, Divider, Grid, Typography } from "@mui/material";

export default function PerformanceMonitoringandTuning() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">
              Performance Monitoring and Tuning
            </Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              Our performance enhancement services focus on maximizing the
              efficiency of your existing hardware and software resources. Our
              skilled consultants perform a detailed review of your database
              systems and the applications that run against them. We evaluate
              your storage infrastructure, database structures, application
              utilization patterns, memory sizing and consumption, and carefully
              examine your use of database indices and the appropriateness of
              your index types.
              <br />
              Once we’ve carried out a full analysis, we work with your system
              administrators, DBA’s, and developers to come to a cost effective
              and expedient performance enhancing solution. Additionally we
              offer customized training session for your DBA and/or development
              staff, focusing on proper index tuning, SQL evaluation, and SQL
              tuning techniques.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../database/Performance Monitoring and Tuning.svg"
              alt="Performance Monitoring and Tuning"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
