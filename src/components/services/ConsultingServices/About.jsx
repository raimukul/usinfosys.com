import { Card, Divider, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="pt-2">
        <Card className="p-4">
          <Typography variant="h5">Consulting Services</Typography>
          <Divider className="bg-dark w-25" variant="string" />
          <Typography className="pt-2" variant="body1">
            Software Testing Services of AIS consulting services offering is
            delivered by a team of consultants including architects and
            specialists with in-depth industry, business, technology, and
            quality process. These seasoned consultants have empowered a range
            of companies to embrace industry leading technologies that align
            with their unique quality goals. We help clients to identify and
            implement best practice solutions to address the unique business
            challenges. These efficiently delivered solutions help you transform
            your business with targeted investments toward growth, optimized
            efficiency and predictable total cost of ownership (TCO), and
            well-managed risk and compliance around business operations.
          </Typography>
        </Card>
      </div>
    </div>
  );
}
