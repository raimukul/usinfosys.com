import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const strength = [
  { id: 1, name: "Experienced and Highly Qualified team." },
  { id: 2, name: "Personalized Services." },
  {
    id: 3,
    name: "Focused on Research for cutting age technology and training team.",
  },
  {
    id: 4,
    name: "Continuous Technology and Service Upgrades through training and support.",
  },
];

export default function About() {
  return (
    <div className="container">
      <Card className="p-4">
        <Typography>
          AIS is focused on creating long term customer relationships where a
          true Solution Partnership can be achieved. AIS uses Best Practices
          Methodology in creating Staffing Solutions as well as a wide array of
          Professional Services to help our customers with their day to day
          needs. We focus on verity of software consulting services and we
          provide the best expertise in areas of Information Technology. We have
          been delivering Innovative, Cost-effective, Quality Software
          solutions, Products and Services using the Latest Technologies and
          Tools required for the Customers Business in the Global Market. We
          pride ourselves on our ability to become partners with our clients
          enabling us to place the most qualified candidates in the most
          suitable positions. Whether the position is temporary, temp to hire or
          direct hire, our testing and screening process assists us in making
          the perfect match between job seekers and open positions.
          <br />
          Our goal is to provide quality full-time and temporary staffing at
          competitive prices through customized service to our clients, and
          career opportunities for our employees.
          <br />
          <b>Our Approach-</b>
          <br />
          AIS approach is to the delivery of information systems based on a
          partnership with client firms. We focus delivering innovative,
          cost-effective, quality software solutions, products and services
          using the latest technologies and tools required for the customers’
          business in the global market.
          <br />
          <b>Our Strength –</b>
          <br />
          <List aria-label="contacts">
            {strength.map((NType) => {
              return (
                <ListItem disablePadding key={NType.id}>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={NType.name} />
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </Card>
    </div>
  );
}
