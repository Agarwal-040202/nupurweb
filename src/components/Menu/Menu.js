import React from "react";
//import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
    <section>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black"}}  >
        <Container>
          <div className="Navbar-brand">
            <Navbar.Brand
              style={{ fontSize: "35px", color: "#6495ED" }}
            >
              Dr. Nupur Goyal
            </Navbar.Brand>
          </div>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ color: "black" }}
          >
            <div className="nav-link">
              <div>
            <Nav>
              <Nav.Link href="/" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif"}} >
                Home
              </Nav.Link>
              <Nav.Link href="#aboutme" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                AboutMe
              </Nav.Link>
              <Nav.Link href="#education" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                Education
              </Nav.Link>
              <Nav.Link href="#paper" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                Paper
              </Nav.Link>
              <Nav.Link href="#book" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                Book
              </Nav.Link>
              <Nav.Link href="#events" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                Events
              </Nav.Link>
              <Nav.Link href="#contactme" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                ContactMe
              </Nav.Link>
              <Nav.Link href="#testimonial" style={{ color: "wheat",fontSize:"15px",fontFamily:"sans-serif" }}>
                Testimonial
              </Nav.Link>
            </Nav>
            </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </section>
      
    </>
  );
};

export default Menu;
