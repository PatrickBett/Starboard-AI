import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Container } from 'react-bootstrap'
function Header() {
  return (
          
          <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
          <Container>
            <Navbar.Brand href="/">Starboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dealsoverview">Deals Overview</Nav.Link>
                <Nav.Link href="/upload">New upload</Nav.Link>
                <Nav.Link href="/workshop">Workshop</Nav.Link>
                <Nav.Link href="/pipeline">Pipeline</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
              </Nav>
              {/* <Button variant="outline-primary" onClick={() => setShowModal(true)}>Upload OM</Button> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Header