import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

export default function InstallationandUpgrade() {
  return (
    <div className="pt-2">
      <Container>
        <Card className="p-2">
          <Grid container spacing={2} justify="space-between">
         
            <Grid item sm={12} md={8}>
              <Typography variant="h5">Installation and Upgrade</Typography>
              <Divider className="bg-dark w-25" variant="string" />
              <Typography>
                Proper installation and configuration of any enterprise database
                software is no trivial task; it consist of numerous components
                and configuration options. Some of these configuration choices
                are not reversible and may have significant implications on the
                way your database performs. We pose the skills required to
                complete an efficient, successful and well-organized
                installation. In recognizing and understanding the critical
                installation decisions, we can help you plan the installation,
                determine the appropriate system resources required for optimal
                performance, follow recommended best practices, and efficiently
                configure the software.
              </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
            <img
                src="../database/Installation and Upgrade.svg"
                alt="Installation and Upgrade"
                className="w-100 display-block ml-auto mr-auto"
              ></img>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
