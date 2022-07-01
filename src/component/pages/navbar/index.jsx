import React from 'react'
import { Container,Navbar , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const NavbarComponent = () => {
  return (

    <Navbar bg="primary" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Porfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link}  to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/todo">todo</Nav.Link>
        <Nav.Link as={Link} to="/support">Support Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComponent