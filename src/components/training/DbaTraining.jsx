import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const idealList = [
  {
    id: 1,
    iList:
      "Those who are already in IT and would like to jump into the world of Database Administration.",
  },
  {
    id: 2,
    iList:
      "Those who are already working as a Database Administrator and would like to get certification and advance there knowledge.",
  },
  {
    id: 3,
    iList:
      "College students who would like to learn about Database concepts so that they can achieve high grades in their RDBMS related curriculum.",
  },
  {
    id: 4,
    iList:
      "College students who would like to get into Oracle Database Administration as soon as they finish their college.",
  },
  {
    id: 5,
    iList: "Fresh graduates who are looking for a job in the IT industry.",
  },
  {
    id: 6,
    iList:
      "Anyone with the determination of getting into IT in order to have a better career.",
  },
];

export default function DbaTraining() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/training/DBATraining.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">DBA Training</h1>
              <p className="lead text-secondary my-5">
                Database Administrators (DBAs) are responsible for the design,
                implementation, support and maintenance of computerized
                databases in today’s organizations. The role also includes
                architecting, building and scaling databases for future data
                growth and capacity. They are also responsible for security,
                performance and availability of data to users and customers.{" "}
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Get Enrolled
              </Link>
            </div>
          </div>
          <Card className="p-2">
            <div className="Overview-section pt-2">
            <p className="lead text-secondary">
              <b>Overview</b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography className="pt-2" variant="body1">
              AIS is one of the most trusted training partners of many
              international corporate and IT Professional for technical training
              with a special focus on Databases and Cloud Technologies. We offer
              both standards and customize programs in Database training and
              Cloud Technologies.Trainings are available in the digital model
              with real life-like experience. Mentors are highly experienced
              with a minimum of 15 years of hands-on experience with the top 100
              MNCs of the world. We provide for the best Database training, from
              DBA experts. This Database training would build you up to yourself
              in every possible activity performed by a Database administrator.
              <br />
              All the above tasks are performed with the help of a Database
              Management System (DBMS) and the leading and most widely used DBMS
              across the world today are the Oracle Database, Microsoft SQL
              Server, MySQL database etc. Out of the three DBMS technologies,
              Oracle Database is the most popular and widely used database in
              the world today.
            </Typography>
            </div>
           <div className="Course-Description pt-2">
            <p className="lead text-secondary">
              <b> Course Description</b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography className="pt-2" variant="body1">
              ‘Oracle Database Administration for Absolute Beginners’ course
              explains about the basic concepts of Relational Database
              Management Systems (RDBMS). It will help you to become an Oracle
              Database Administrator (Oracle DBA).
              <br />
              Database Administrator is one of the highly sought after jobs in
              the IT industry. It is also one of the highly stable jobs as DATA
              is a vital part of every organization and they need that to be in
              the capable hands of a good DBA team. This course is absolutely
              for beginners. This is applicable for those who would want to
              learn Oracle Database 12c as well as Oracle Database 11g.
            </Typography>
            </div>
            
              
           
            <Typography className="pt-2" variant="body1">
            <b>This would be ideal for</b>
              <List aria-label="contacts">
                {idealList.map((Nlist) => {
                  return (
                    <ListItem disablePadding key={Nlist.id}>
                      <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={Nlist.iList} />
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
         
            {/* section2 */}
            <p className="lead text-secondary">
              <b> </b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography className="pt-2" variant="body1"></Typography>
            {/* section2 */}
            <p className="lead text-secondary">
              <b> </b>
            </p>
            <Divider className="bg-dark w-25" variant="string" />
            <Typography className="pt-2" variant="body1"></Typography>
          </Card>
        </div>
      </section>
    </div>
  );
}
