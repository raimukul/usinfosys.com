import React from "react";
import { Card, Typography } from "@mui/material";

export default function Body() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Typography>
          Each service is usually provided by a server component running on one
          or more computers (often a dedicated server computer offering multiple
          services) and accessed via a network by client components running on
          other devices. However, the client and server components can both be
          run on the same machine.
          <br />
          Contingent specializes in providing complete network solutions
          tailored to the specific needs of each Client. The company is
          dedicated to providing world-class information technology products and
          services with a focus on exceeding customer expectations. AIS designs,
          deploys and supports various types of infrastructure solutions for
          Clients including: WAN, LAN, Wireless, Servers, Desktops, Structured
          Cabling.
        </Typography>
      </Card>
    </div>
  );
}
