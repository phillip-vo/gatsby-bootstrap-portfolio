import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link, navigate } from "gatsby"

export default function NavigationBar() {
  return (
    <Navbar expand="lg" collapseOnSelect className="pt-4 align-items-center">
      <Link to="/" className="h2 text-decoration-none text-dark mx-3">
        Portfolio
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-center ms-auto">
          <Link to="/about" className="nav-item nav-link mx-3">
            About
          </Link>
          <Link to="/projects" className="nav-item nav-link mx-3">
            Projects
          </Link>
          <a
            href="#skills"
            className="nav-item nav-link mx-3"
            style={{ cursor: "pointer" }}
          >
            Skills
          </a>
          <Link to="/github" className="nav-item nav-link mx-3">
            Github
          </Link>
          <Link to="/resume">
            <Button variant="outline-dark" className="rounded-pill mx-3 px-3">
              Resume
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
