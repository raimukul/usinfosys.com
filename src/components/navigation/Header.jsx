import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            American Info Systems
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                eventkey={1}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/services/consulting-services"
                  className="text-decoration-none"
                  eventkey={2}
                >
                  Consulting Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/database-services"
                  className="text-decoration-none"
                  eventkey={3}
                >
                  Database Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/networking-services"
                  className="text-decoration-none"
                  eventkey={4}
                >
                  Networking Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/staffing-services"
                  className="text-decoration-none"
                  eventkey={5}
                >
                  Staffing Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/testing-services"
                  className="text-decoration-none"
                  eventkey={6}
                >
                  Testing Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/services/testing-services"
                className="text-decoration-none"
                eventkey={7}
              >
                Solutions
              </Nav.Link>
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
