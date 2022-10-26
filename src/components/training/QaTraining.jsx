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
const skills = [
  { id: 7, sName: "It helps to identify individual project requisites." },
  {
    id: 8,
    sName:
      "Trainees become efficient to prepare reports on product requirements.",
  },
  { id: 9, sName: "Regular updating skills are also enhanced." },
  {
    id: 10,
    sName:
      "Candidates can effectively ensure that products meet up required standards.",
  },
  {
    id: 11,
    sName: "Trainees become proficient to analyze product performance.",
  },
  { id: 12, sName: "Candidates can dexterously follow all protocols." },
];

export default function QaTraining() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/training/Software QA Training.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Software QA Training</h1>
              <p className="lead text-secondary my-5">
                The continuously evolving software delivery models, new
                development methodologies, rapidly mushrooming mobile
                application development, and open source software, will make
                software testing a life giving component in the Software
                Development Life Cycle (SDLC). Cloud computing, new test
                automation tools and techniques, and other more recent
                technologies are changing the face of software testing with a
                life saving speed.
              </p>
              <Link
                to="/training/enroll"
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
              <Typography className="pt-2" variant="body1" component={"span"}>
                Software testing involves carrying out detailed investigation
                regarding quality of particular product as well as service which
                is under scrutiny. This information is basically meant for
                stakeholders. However, it is also aimed towards providing
                businesses with a clear idea regarding risks involved in
                bringing that particular software into operation. This whole
                process of validation as well as verification is aimed towards
                finding out:
                <List aria-label="contacts">
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Whether a product meets up to required standards?" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Whether its functioning matches with its essential criterion?" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Whether its implementation is feasible as expected?" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Whether it fulfils requirements of all stakeholders?" />
                  </ListItem>
                </List>
                Various static as well as dynamic testing methods are adopted in
                this process. Large job opportunities are there in this field
                and software testing is increasingly becoming a popular career
                choice. You can opt for software testing training online as well
                as offline provided by best Software tester trainee.
                <br />
                <b className="pt-2">
                  What is meant by software testing training?
                </b>
                <br />
                Software testing training involves developing skills in
                candidate relating to conducting processes to scrutinize quality
                of products as well as services so as to ensure that it is free
                from any defects. Software testing tutorial trains you to
                perform testing at any stage of processing so as to make sure
                that product and services are not invaded by any bugs. This
                process includes checking products and services to guarantee
                that they meet up their requirements.
                <br />
                Software testing training class also develops individual skills
                in using various testing tools, including static and dynamic
                ones. Different tools and methods are adopted for testing
                credibility of products as well as services. While conducting
                this test, some aspects are taken into account namely, their
                type, development process, use, etc. One factor which needs to
                be considered is that of software type which is in its
                development stage. Different softwares have different
                requirements and it is to be determined whether development
                process should proceed to its next stage or not.
                <br />
                Software testing is concerned with managing reputation of
                companies as good quality products and services help maintain a
                good reputation among consumers. All these aspects are covered
                in Software testing tutorial.
                <br />
                <b>Role of Software tester</b>
                <br />
                Before opting for this course, it is necessary to understand
                important role played by a software tester. Conventionally,
                their role was restricted only towards checking whether all
                components of products or software’s are being delivered to
                customers. But with advancement of age, role of a software
                tester has also increased manifold encompassing various
                activities to make sure that products are functioning
                effectively with no errors.
                <br />
                <b>Joining training courses for software testing</b>
                <br />
                With significant growth of IT industry, software development is
                becoming an attractive field for youngsters. Companies are also
                realizing importance of services of a trained software tester,
                and so it becomes necessary for those who have interest in this
                field to take formal training. Software testing courses are
                being provided by best trainers offering you with latest
                practices, technologies as well as trends relating to this
                field.
                <br />
                <b>Skills achieved by software testing training</b>
                <br />
                Software testing training Class develops certain skills in
                trainees which prove to be very useful to candidates when
                dealing with real work place projects:
              </Typography>
              <List aria-label="contacts">
                {skills.map((Nlist) => {
                  return (
                    <ListItem disablePadding key={Nlist.id}>
                      <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={Nlist.sName} />
                    </ListItem>
                  );
                })}
              </List>
            </div>

            <Typography className="pt-2" variant="body1" component={"span"}>
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
              This course is mainly based on video lectures. However it also has
              theoretical sections for reference and LAB exercises for hands-on
              practice.
              <br />
              <b>Joining software testing class</b>
              <br />
              Keeping in mind significance of software testing training, it is
              important to consider all available options and sagaciously
              choosing for best program as per your experience, background and
              interest. Various courses are offered for both beginners as well
              as experienced candidates. So it is suggested to join best
              software testing class and enhance your testing skills so as to
              improve your efficiency as well as productivity.<br/>
              <b>AIS Provides:</b>
              <List aria-label="contacts">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Online QA Training" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Instructor Lead Live QA Trainings" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="QA Live Projects" />
                </ListItem>
              </List>
              <b>Training Schedule and fee</b>
              <br />
              For training schedule and fee details, please send an email to
              &nbsp;
              <a href="mailto:training@usinfosys.com">training@usinfosys.com</a>
              &nbsp; or call 804-349-9015
            </Typography>
          </Card>
        </div>
      </section>
    </div>
  );
}
