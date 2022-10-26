import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import React from "react";

const focused = [
  {
    id: 1,
    point: "Performing a gap analysis on current testing practices in place.",
  },
  { id: 2, point: "Define a vision and implementation of a road map." },
  {
    id: 3,
    point:
      "Establish a governance mechanism followed Quality Assurance and Quality Control process.",
  },
  {
    id: 4,
    point:
      "Set up components of the testing Framework including Manual, Automation centers and performance centers.",
  },
  { id: 5, point: "Communicate regularly at all organizational levels." },
  { id: 6, point: "Ensure smooth progress of the implementation." },
];

const help = [
  {
    id: 1,
    hTopic:
      "Maximize ROI from software testing through consolidation and standardization.",
  },
  {
    id: 2,
    hTopic:
      "Minimize production support costs by ensuring fewer defects leak into production.",
  },
  {
    id: 3,
    hTopic:
      "Deliver higher customer satisfaction and employee engagement with improved quality of software.",
  },
  { id: 4, hTopic: "Minimize time to market for new functionality." },
  {
    id: 5,
    hTopic: "Achieve a culture of high performance and high job satisfaction.",
  },
];

export default function Body() {
  return (
    <div className="container">
      <Card className="p-2 mt-2">
        <Typography>
          It comprises strategic assets (people, process and technology) tied
          together to realize the vision of a centralized quality organization.
          The AIS framework leverages tools, techniques and methodologies to
          deliver near-zero-defect applications to clients. A complete framework
          is implemented in multiple phases, with distinct focus areas for each
          phase.
          <br />
          <b>We focused on:</b>
          <br />
          <List aria-label="contacts">
            {focused.map((NType) => {
              return (
                <ListItem disablePadding key={NType.id}>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={NType.point} />
                </ListItem>
              );
            })}
          </List>
          <br />
          <b>We help you in:</b>
          <br />
          <List aria-label="contacts">
            {help.map((NHelp) => {
              return (
                <ListItem disablePadding key={NHelp.id}>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={NHelp.hTopic} />
                </ListItem>
              );
            })}
          </List>
          <br />
          We provide the Enterprise-wide QA strategy and Approach for our client
          for various type of testing depending on the needs.
        </Typography>
      </Card>
    </div>
  );
}
