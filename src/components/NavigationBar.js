// src/components/NavigationBar.js
import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link href="/" legacyBehavior>
            <a>IoT Inventory Dashboard</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/inventory-report" legacyBehavior>
                <a>Inventory Report</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/company-dashboard" legacyBehavior>
                <a>Company Dashboard</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/data-analysis" legacyBehavior>
                <a>Data Analysis</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/project-info" legacyBehavior>
                <a>About Project</a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
