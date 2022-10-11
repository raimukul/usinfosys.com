import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const joinUs = [
  {
    id: 1,
    joinList:
      "Interact with and learn from seasoned professionals from Day One",
  },

  { id: 2, joinList: "Substantial, long-term experiences" },

  { id: 3, joinList: "Get paid – and paid well – to learn on the job" },

  {
    id: 4,
    joinList: "Jobs are flexible and convenient to the lifestyle of students",
  },

  {
    id: 5,
    joinList: "100-percent placement rate after graduation and training",
  },

  {
    id: 6,
    joinList: "Gain real-world experience using cutting-edge technology",
  },

  { id: 7, joinList: "Work – and network – with like-minded students" },
];

export default function WhyJoinUs() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/career/Whyjoinus.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Why join us? </h1>
              <p className="lead text-secondary my-5">
                What does it mean to work at AISI? Being a part of some of the
                most interesting team and projects. Helping your clients and
                colleagues create innovative, game-changing strategies. Develop
                innovative solutions for some of the world’s leading companies,
                in a team-oriented environment that offers variety and
                intellectual challenge. Learn valuable skills and enjoy
                unparalleled career, training and educational opportunities,
                with financial and other rewards linked to your growth and
                performance.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="pt-4 pb-4">
            AIS offer a holistic career path with well-defined roles,
            responsibilities and objectives. On a regular basis you get to work
            in strategic transformation programs as well as innovative
            technology implementation projects. The work environment is
            conducive for productivity yet perfectly offers the ideal work-life
            balance.
            <br />
            <b>For Students after graduation –</b><br/>
            Real-life work experience is more important than ever for computer
            science majors, but finding a well-run, high-value internship
            program that results in a full-time IT job post-graduation can be
            both challenging and time-consuming. Internships are typically
            off-campus, which can pose scheduling and transportation challenges
            <br />
            Even the best internships aren’t guaranteed a full-time job offer
            upon graduation. Many internships are for short periods of time: a
            semester, summer or academic year which can make training rushed and
            leave students feeling like they’ve barely scratched the surface.
            <br />
            <b>Experience the many benefits of working for AIS, including:</b>
            <br />
            <List aria-label="contacts">
              {joinUs.map((NType) => {
                return (
                  <ListItem disablePadding key={NType.id}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={NType.joinList} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </section>
    </div>
  );
}
