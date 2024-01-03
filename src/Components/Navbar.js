import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        style={{
          position: "absolute",
          width: "100%",
          height: "10vh",
          opacity: "0.8",
          backgroundColor: "black",

          // background: "linear-gradient(90deg, #d3e5ff 60%, cyan)",
        }}
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          CRICKHOUR
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/features">
              <ReactBootStrap.Nav.Link href="#features">
                Fantasy Cricket
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/pricing">
              <ReactBootStrap.Nav.Link href="#pricing">
                App Download
              </ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown
              title="Fantasy Sports"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/deets">
              <ReactBootStrap.Nav.Link href="#deets">
                About Us
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/dankmemes">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Contact Us
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
