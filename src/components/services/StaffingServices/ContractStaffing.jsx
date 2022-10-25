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

const ContractStaff = [
  { id: 1, detail: "Operational cost reduction" },
  {
    id: 2,
    detail:
      "Minimal payroll maintenance and hence increased revenue per employee",
  },
  {
    id: 3,
    detail: "Experienced human resource for specific and time bound jobs",
  },
  { id: 4, detail: "Less administrative responsibilities" },
  {
    id: 5,
    detail:
      "Increase the resource mobilization for other core areas of business",
  },
  { id: 6, detail: "Reduce the problem that arises from leave vacancies" },
];

export default function ContractStaffing() {
  return (
    <div className="pt-2">
      <Card className="p-2">
        <Grid container spacing={2} justify="space-between">
          <Grid item sm={12} md={8} className="m-auto">
            <Typography variant="h5">Contract Staffing</Typography>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography>
              Contract Staffing is a co-employment relationship between an
              employer, a staffing company and the employee. Contract staffing
              is increasingly becoming popular among the corporate houses
              because of the cost efficiency and effectiveness of the practice.
              There are certainly some significant benefits that the companies
              get from the contract staffing solutions.
              <br />
              Here, we point out some of the benefits that the companies get by
              opting for contract staffing solutions:
            </Typography>
            <List aria-label="contacts">
              {ContractStaff.map((PName) => {
                return (
                  <ListItem disablePadding key={PName.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={PName.detail} />
                  </ListItem>
                );
              })}
            </List>
            <Typography>
              We maintain an extensive database of contractual workers and hence
              we can ensure effectual and prompt solution for your staffing
              requirements. We also provide advice and consultancy in planning
              your short term, specific project or seasonal staffing
              requirements.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4} className="m-auto">
            <img
              src="../../assests/services/contractStaffing bg.svg"
              alt="Database Security system"
              className="w-100 display-block ml-auto mr-auto"
            ></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
