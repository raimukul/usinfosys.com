import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

export default function ApplicationIntegrationandMigration() {
  return (
    <div className="pt-2">
      <Container>
        <Card className="p-2">
          <Grid container spacing={2} justify="space-between">
            <Grid item sm={12} md={4}>
              <img
                src="./database/Application Integration and Migration.svg"
                alt="Application Integration and Migration"
                className="w-100 display-block ml-auto mr-auto"
              ></img>
            </Grid>
            <Grid item sm={12} md={8}>
              <Typography variant="h5">
                Application Integration and Migration
              </Typography>
              <Divider className="bg-dark w-25" variant="string" />
              <Typography>
                We offer application integration as well as data migration
                services. The integration services are generally advisory in
                nature with an emphasis on educating your development staff on
                the best approaches for utilizing new structured data and/or new
                database features. Data migration services offer clients the
                comfort of using our highly skilled staff to perform some of the
                most sensitive of tasks. AIS works with the client’s staff to
                migrate existing applications or data to other major database
                vendors such as from MS SQL Server or IBM DB2 to an Oracle
                platform, or vice versa. These tasks include ensuring proper
                data type conversions and database settings as well as, among
                other things, implementing the appropriate database and table
                space configurations.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
