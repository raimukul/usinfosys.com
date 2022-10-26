import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";

const testingTypes = [
  {
    id: 21,
    type: "Who Can Make a Referral?",
    details:
      "You are eligible to make an employee referral if you are not involved in the hiring process for the referred candidate. Office of Human Resources staff members is not eligible.",
  },
  {
    id: 22,
    type: "What types of jobs are eligible for this reward program and what is the reward?",
    details:
      "All positions currently open may be eligible for employee referral rewards. <br/>You can review current openings at Current Opening with AIS",
  },
  {
    id: 23,
    type: "Who can be referred?",
    details:
      "<b>Candidates are eligible for employee referral provided they:</b><br/>&#8594; Are not currently employed by AIS. <br/>&#8594; Have not been referred previously by someone else. <br/>&#8594; Have not previously applied for a position at AIS. <br/> <b>Candidates are eligible for employee referral provided they:</b><br/>&#8594; The required qualifications.<br/>&#8594; A good employment record.<br/>&#8594; Valid status to work in USA.<br/>&#8594; Can Pass the back ground check.",
  },
  {
    id: 24,
    type: "How do I refer someone?",
    details:
      "The process of referring a candidate is simple. Just send an email with your details such as full name, email address and contact number along with the candidate resume to the job@usinfosys.com. If you refer more than one candidate at the same time, please attached the all candidates resume along with their contact details. You may refer someone only one time.<br/>The applicant may also indicate that you referred them. When asked “How did you hear about this position?”",
  },
  {
    id: 25,
    type: "When am I eligible to receive the referral reward?",
    details:
      "The referral reward will be made as a taxable, additional payment and will be given to you.<br/><b>You are eligible to receive the reward:</b><br/>&#8594; If you submitted your referral prior to the time the candidate is offered an interview or the candidate indicated your referral.<br/>&#8594; When the person you referred is hired into a position included in this program.<br/>&#8594; After the person you referred is employed for minimum six months with AIS.",
  },
];
export default function ReferralProgram() {
  return (
    <div>
      <section className="hero-banner bg-light py-1">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="../assests/career/Rprogram.svg"
                className="img-fluid"
                alt="Web Development"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Referral Program</h1>
              <p className="lead text-secondary my-5">
                At AIS, we have found that employee referrals are an effective
                way for recruiting top-notch employees.
                <br />
                If you refer a person who then is hired and remains in the job
                for at least six months, you may receive a reward up to $2,000,
                less applicable taxes. To receive this reward, you must be
                employed by AIS when the reward payment is made.
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg border"
              >
                Refer Someone
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Typography variant="h5" className="p-3">
          Frequently Asked Questions and Answers regarding Referral Program at
          AIS.
        </Typography>
        {testingTypes.map((testing) => {
          return (
            <Accordion key={testing.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="bg-red"
                key={testing.id}
              >
                <Typography variant="h6">
                 {testing.type}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{parse(testing.details)}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
