import { Card, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const position = [
{id:71, pName: "Project Manager"},
{id:72, pName: "Database Administrator"},
{id:73, pName: "System Administrator"},
{id:74, pName: "Solution Architect"},
{id:75, pName: "Business Analyst"},
{id:76, pName: "Programmer"},
{id:77, pName: "Tester"},
{id:78, pName: "Quality Assurance Specialist"},
{id:79, pName: "Trainer"}
]
export default function About() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Typography>
          AIS believe in achieving real business results that allow you to
          transform, and not just maintain, your operations. Our IT services,
          business solutions, and outsourcing bring you a level of certainty.
          You’ll experience requirements that are met on-time, within budget,
          and with high quality; greater efficiency and responsiveness to your
          business; and the ability to shift investment to strategic initiatives
          rather than tactical functions.
          <br />
          Our national and international network of offices and partners are the
          key to recruiting qualified IT professionals. We are dedicated to
          helping your organization meet its strategic financial goals. Our
          attention to quality, our focus on helping our clients and industry
          leading methodologies in recruiting and screening sets us apart from
          others.
          <br/>
          <b>AIS’s staffing services often include the following positions: </b>
        </Typography>
        <List aria-label="contacts">
                {position.map((PName) => {
                  return (
                    <ListItem disablePadding key={PName.id}>
                      <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={PName.pName} />
                    </ListItem>
                  );
                })}
              </List>
      </Card>
    </div>
  );
}
