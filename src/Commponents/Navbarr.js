import React from 'react'
import './Navbarr.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { BiLogoSketch } from "react-icons/bi";


function Navbarr() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container className='mr-dafoe-regular'>
          <Navbar.Brand style={{ fontFamily: "-moz-initial", fontSize: "40px" }} href="/"><BiLogoSketch /> Fashion Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-left">
              <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "60px", fontFamily: "-moz-initial" }} href="/">Trendy</Nav.Link>
              <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px", fontFamily: "-moz-initial" }} href="Men">Men</Nav.Link>
              <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px", fontFamily: "-moz-initial" }} href="Women">Women</Nav.Link>
              <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px", fontFamily: "-moz-initial" }} href="Kids">Kids</Nav.Link>
              <Nav.Link
                style={{ color: "White", fontSize: "25px", marginLeft: "100%", fontFamily: "-moz-initial" }}href="Cartbag">
                <FaCartShopping />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbarr
