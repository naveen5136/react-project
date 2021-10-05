import React from 'react';
import { Nav,Navbar,Container } from 'react-bootstrap';

function Header() {
    return (
        <> <>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">CL Techno</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">All Courses</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
        <br />

      </> </>
    )
}

export default Header;