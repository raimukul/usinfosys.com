import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NService = [
  {
    id: 1,
    SLink: "/services/consulting-services",
    SName: "Consulting Services",
  },
  { id: 2,
    SLink: "/services/database-services",
    SName: "Database Services" },
  {
    id: 3,
    SLink: "/services/networking-services",
    SName: "Networking Services",
  },
  { id: 4,
    SLink: "/services/staffing-services",
    SName: "Staffing Services" },
  { id: 5,
    SLink: "/services/testing-services",
    SName: "Testing Services" }
];
const NSolution = [
  {
    id: 1,
    serviceName: "Testing and Quality Control",
    link: "/solution/testing-quality",
  },
  {
    id: 2,
    serviceName: "Data Warehouse",
    link: "/solution/dataware-house",
  },
  {
    id: 3,
    serviceName: "Business Intelligence (BI)",
    link: "/solution/business-intelligence",
  },
  {
    id: 4,
    serviceName: " E-business",
    link: "/solution/e-business",
  }
];
const NTraining = [
  {
    id: 1,
    trainingName: "DBA Training",
    link: "/training/dba-training",
  },
  {
    id: 2,
    trainingName: "Software QA Training",
    link: "/training/qa-training",
  }
];

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg_header">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">
            American Info Systems
          </Navbar.Brand> */}
           <Navbar.Brand  as={Link}
                      to='/'>
            <img
              src="/Logo_USInfoSys.webp"
              width="300"
              height="67"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                eventkey={1}
                renderMenuOnMount={true}
              >
                {NService.map((NavService) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={NavService.SLink}
                      className="text-decoration-none"
                      eventkey={2}
                      key={NavService.id}
                    >
                      {NavService.SName}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Solution"
                id="collasible-nav-dropdown"
                eventkey={2}
                renderMenuOnMount={true}
              >
                {NSolution.map((NavSolution) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={NavSolution.link}
                      className="text-decoration-none"
                      eventkey={2}
                      key={NavSolution.id}
                    >
                      {NavSolution.serviceName}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Training"
                id="collasible-nav-dropdown"
                eventkey={8}
                renderMenuOnMount={true}
              >
                 {NTraining.map((NavTraining) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={NavTraining.link}
                      className="text-decoration-none"
                      eventkey={2}
                      key={NavTraining.id}
                    >
                      {NavTraining.trainingName}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Careers"
                id="collasible-nav-dropdown"
                eventkey={11}
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/career/why-join-us"
                  className="text-decoration-none"
                  eventkey={20}
                >
                  Why join us?
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/career/current-opening"
                  className="text-decoration-none"
                  eventkey={21}
                >
                  Current Openings
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/career/referral"
                  className="text-decoration-none"
                  eventkey={22}
                >
                  Referral Program
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-decoration-none"
                eventkey={12}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="text-decoration-none"
                eventkey={13}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
