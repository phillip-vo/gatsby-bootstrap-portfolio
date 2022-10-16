import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Hero() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6} className="my-auto py-5">
          <div>
            <span className="h2">Hi</span>
            <FontAwesomeIcon
              icon="fa-regular fa-hand"
              size="2x"
              className="mx-2"
            />
          </div>
          <div>
            <span className="h2">I'm</span>
            <span className="display-4 mx-2" style={{ fontWeight: "500" }}>
              John Doe
            </span>
          </div>
          <p className="mt-3">
            A Front-End Developer passionate about creating interactive
            applications and experiences on the web
          </p>
          <div className="d-flex gap-3">
            <Button variant="outline-dark" className="rounded-pill px-3">
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> LinkedIn
            </Button>
            <Button variant="outline-dark" className="rounded-pill px-3">
              <FontAwesomeIcon icon="fa-brands fa-github-alt" /> GitHub
            </Button>
            <Button variant="outline-dark" className="rounded-pill px-3">
              <FontAwesomeIcon icon="fa-solid fa-envelope" /> Mail
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={6} className="text-center">
          <StaticImage
            src="../images/man-with-blazer-flip.png"
            alt="man in blazer drawing by Pablo Stanley"
            placeholder="blurred"
            width={400}
          />
        </Col>
      </Row>
    </Container>
  )
}
