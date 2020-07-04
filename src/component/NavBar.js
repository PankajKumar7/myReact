import React from 'react';
import { Navbar,  Nav } from 'react-bootstrap';

function NavBar() {
  return (

    <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto" >
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/AboutUs">About</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;
