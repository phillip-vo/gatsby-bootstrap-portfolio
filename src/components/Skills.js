import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const skills = [
  "react",
  "java",
  "node",
  "html5",
  "css3",
  "bootstrap",
  "git",
  "docker",
  "windows",
  "apple",
]

export default function Skills() {
  return (
    <Container className="my-5">
      <span className="small">Check out my</span>
      <span className="h4 mx-2" id="skills">
        Skills <FontAwesomeIcon icon="fa-regular fa-face-surprise" size="lg" />
      </span>
      <hr />
      <Row className="gap-3 justify-content-center">
        {skills.map(skill => (
          <div
            style={{ width: "10rem" }}
            className="border border-dark py-1 rounded-pill text-center d-flex align-items-center justify-content-center gap-2"
          >
            <FontAwesomeIcon icon={["fab", skill]} size="2x" />
            <span className="text-capitalize">{skill}</span>
          </div>
        ))}
        <Button
          variant="dark"
          className="rounded-pill"
          style={{ width: "10rem" }}
          onClick={() => alert("Needs to be implemented :P")}
        >
          +Load More
        </Button>
      </Row>
    </Container>
  )
}
