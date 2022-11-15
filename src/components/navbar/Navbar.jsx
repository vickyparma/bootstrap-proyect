/* import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container className="Container">
      <Navbar.Brand href="#home">Al Mundo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about-us">About Us</Nav.Link>
        <Nav.Link href="/programas">Programas</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navibar */

import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar(){
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/programas">Programas</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar