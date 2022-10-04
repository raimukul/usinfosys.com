import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const QPlanning = [
  { id: 1, Pname: "Determining a plan for quality." },
  {
    id: 2,
    Pname: "A major task is preparation of the quality management plan.",
  },
  {
    id: 3,
    Pname:
      "Determining if the project is complying with the organizational policies and procedures.",
  },
  { id: 4, Pname: "A major task is conducting regular project audits." },
  {
    id: 5,
    Pname:
      "QA is a set of activities for ensuring quality in the processes by which products are developed.",
  },
  {
    id: 6,
    Pname:
      "QA aims to prevent defects with a focus on the process used to make the product. It is a proactive quality process.",
  },
  {
    id: 7,
    Pname:
      "The goal of QA is to improve development and test processes so that defects do not arise when the product is being developed.",
  },
  { id: 8, Pname: "Identify the weakness in process and improve them." },
  { id: 9, Pname: "Use the standard templates and checklists." },
  { id: 10, Pname: "Prevent the introduction of issues or defects" },
  {
    id: 11,
    Pname:
      "The major goal of the QA Team's evaluation of the effectiveness of quality control is to identify any process flaws and suggest ways to strengthen them.",
  },
  {
    id: 12,
    Pname:
      "QA improves all the processes that is applied to multiple products that will ever be produced by a processes.",
  },
  {
    id: 13,
    Pname:
      "QA personal will be different then quality control and should not perform quality control task unless doing it to validate quality control is working.",
  },
];
const QControl = [
  {
    id: 41,
    QCName: "Measure specific project results (product) against standards.",
  },
  {
    id: 42,
    QCName: "A Major activity is to inspect and verify the project’s product.",
  },
  {
    id: 43,
    QCName:
      "QC is a set of activities for ensuring quality in products. The activities focus on identifying defects in the actual products produced.",
  },
  {
    id: 44,
    QCName:
      "QC aims to identify (and correct) defects in the finished product. Quality control, therefore, is a reactive process.",
  },
  {
    id: 45,
    QCName:
      "The goal of QC is to identify defects after a product is developed and before it’s released.",
  },
  {
    id: 46,
    QCName:
      "Finding & eliminating sources of quality problems through tools & equipment so that customer’s requirements are continually met.",
  },
  {
    id: 47,
    QCName:
      "Identifies defects for the primary purpose of the correcting defects.",
  },
  { id: 48, QCName: "Tester is responsible for QC." },
  {
    id: 49,
    QCName:
      "QC evaluates if the application is working is working as expected or if there is any defect in the functionality.",
  },
  {
    id: 40,
    QCName: "QC improves the development of a specific product or service.",
  },
  {
    id: 51,
    QCName:
      "QA team or personal may perform quality assurance tasks if and when required.",
  },
];
export default function TestingandQualityControl() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../services/AIS_Database_services.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Testing and Quality Control</h1>
              <p className="lead text-secondary my-5">
                Using cutting edge technology, our application quality and
                software testing solutions will enable IT and business
                professionals within your organization to build and maintain a
                valuable corporate asset, namely a series of re-usable and easy
                to maintain test assets. AIS offers the widest range of services
                in the software testing industry using the certified and well
                trained professionals.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get Solution
              </Link>
            </div>
          </div>
          <Card className="p-2">
            <p className="lead text-secondary">
              <b>Quality Planning and Assurance</b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <List aria-label="contacts">
              {QPlanning.map((QAplan) => {
                return (
                  <ListItem disablePadding key={QAplan.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={QAplan.Pname} />
                  </ListItem>
                );
              })}
            </List>
          </Card>
          <div className="pt-2">
          <Card className="p-2">
            <p className="lead text-secondary">
              <b>Quality Control</b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <List aria-label="contacts">
              {QControl.map((QClist) => {
                return (
                  <ListItem disablePadding key={QClist.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={QClist.QCName} />
                  </ListItem>
                );
              })}
            </List>
          </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
