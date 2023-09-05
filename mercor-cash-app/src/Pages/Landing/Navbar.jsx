import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Navbar.scss"

function MyNavbar() {
  return (
    <Navbar className='hero-header'  variant="dark" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Nav.Link href="#legal">Legal</Nav.Link>
            <Nav.Link href="#licenses">Licenses</Nav.Link>
            <Nav.Link href="#security">Security</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#press">Press</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
            <Nav.Link href="#status">Status</Nav.Link>
            <Nav.Link href="#codeblog">CodeBlog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
