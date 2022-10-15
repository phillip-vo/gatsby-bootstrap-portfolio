import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

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
          <Link to="/blog" className="nav-item nav-link mx-3">
            Blog
          </Link>
          <Link to="/features" className="nav-item nav-link mx-3">
            Features
          </Link>
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
