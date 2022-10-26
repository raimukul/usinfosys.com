import React from "react";
import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const method = [
  {
    id: 1,
    details:
      "Our industry leading practices allow us to acquire the best possible skilled resource in lowest possible time; which allows saving cost and meeting the project deliverables on time by our clients.",
  },
  {
    id: 2,
    details:
      "All our consultants are certified from leading certification companies like Brain bench, Oracle, Microsoft, Cisco, SUN etc.",
  },
  {
    id: 3,
    details:
      "Apart from experience certification gives certain degree of confidence in consultant’s technical know-how.",
  },
  {
    id: 4,
    details: "Short PODCAST introduction is available for each candidate.",
  },
  {
    id: 5,
    details:
      "Short PODCAST from the candidate gives an opportunity to evaluate candidate’s communication as well as technical skills before interviewing him on phone or face-to-face. Our statistics shows that this unique methodology in interviewing has cut the no. of interviews by 40% and minimized lead time to secure the right skilled resource.",
  },
  {
    id: 6,
    details:
      "Candidates interviews are stored online and can be played and reviewed by client.",
  },
  {
    id: 7,
    details:
      "The whole interview is stored online and can be reviewed by any person with proper access from client; the person(s) did not participate in the interview can still review the interview and give his feedback about the candidate. This process cuts in postponing of interviews as well give a chance to have consent from all concerned persons",
  },
];
export default function Methodologies() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={8}>
            <Typography variant="h5">
              Our Industry leading methodologies in staffing:
            </Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              Our higher standards of screening and recruiting and dedicated
              account managers coupled with industry leading methodologies
              reduces the total no. of interviews and lead time to secure the
              right skilled resource for our clients.
            </Typography>
            <List aria-label="contacts">
              {method.map((NType) => {
                return (
                  <ListItem disablePadding key={NType.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={NType.details} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../../assests/services/Artboard 1methodLong.svg"
              alt="Network Maintenance Services"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
