import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} lg={6}>
          <StaticImage
            src="../images/boy-sitting-on-legs.png"
            alt="boy squating drawing by Pablo Stanley"
            width={400}
          />
        </Col>
        <Col xs={12} lg={6}>
          <span className="h1" id="about">
            Who Am I
          </span>
          <span className="small mx-2">
            I'm not really sure{" "}
            <FontAwesomeIcon icon="fa-regular fa-face-sad-cry" size="2x" />
          </span>
          <hr />
          <div className="d-flex flex-column gap-3">
            <span className="display-6">
              Developer & Designer based out of Dallas?
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
