import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Container fluid className="bg-dark p-4">
      <Row className="text-center align-items-center">
        <Col>
          <Link to="/" className="h4 text-decoration-none text-light">
            Portfolio
          </Link>
        </Col>
        <Col>
          <Link
            to="/privacy"
            className="small text-decoration-none text-light "
          >
            PRIVACY
          </Link>
          <Link
            to="/blog"
            className="small text-decoration-none text-light mx-5"
          >
            IMPRINT
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
