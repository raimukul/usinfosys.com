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
    link: "/services/networking-services",
  },
  {
    id: 4,
    serviceName: " eBusiness",
    link: "/services/staffing-services",
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
           <Navbar.Brand href="#home">
            <img
              src="/Logo_USInfoSys.png"
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
              >
                <NavDropdown.Item
                  as={Link}
                  to="/testing-services"
                  className="text-decoration-none"
                  eventkey={9}
                >
                  DBA Training
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/testing-services"
                  className="text-decoration-none"
                  eventkey={10}
                >
                  Software QA Training
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Careers"
                id="collasible-nav-dropdown"
                eventkey={11}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/testing-services"
                  className="text-decoration-none"
                  eventkey={20}
                >
                  Why join us?
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/testing-services"
                  className="text-decoration-none"
                  eventkey={21}
                >
                  Current Openings
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/testing-services"
                  className="text-decoration-none"
                  eventkey={22}
                >
                  Referral Program
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/testing-services"
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
