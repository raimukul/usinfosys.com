import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function About() {
  return (
    <div>
      <Container>
        <Card className="p-3">
          <div className="pt-2 pb-2">
            <Typography variant="body1">
              From day-to-day operations to strategic decision making, your
              databases are the engines that drive your business. Database
              Services SQL Server technicians have the experience and skill sets
              you need to ensure that your database environments have high
              performance, security, and availability. AIS offer a comprehensive
              set of well-defined enterprise database services. These services
              are focused on Desktop databases like MySQL, Access to enterprise
              database solutions like Oracle, SQL Server, DB2 and FileMaker Pro.
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
}
