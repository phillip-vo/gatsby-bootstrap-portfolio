import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"

export default function Projects() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <span className="h2">Projects</span>
          <span className="small mx-2">There's some good stuff here </span>
          <FontAwesomeIcon icon="fa-regular fa-face-grimace" size="2x" />
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="border text-center">
          <StaticImage
            src="../images/daniel-korpai-aUmq85-2V7I-unsplash.jpg"
            alt="Laptop image by Daniel Korpai"
            width={400}
            className="rounded shadow"
          />
        </Col>
        <Col className="border">
          <span className="h4">Retrovure Video Game Store</span>
          <hr />
          <p>
            A full-stack application leveraging a backend built with Spring
            framework hosted on Azure and incorporating a CI/CD pipeline, and a
            front end made with React that allows the user to navigate a video
            game store.
          </p>
          <span className="h5">Roles / Responsibilities</span>
          <ul>
            <li>Created a Single Page Application using React</li>
            <li>Applied Axios API in React to talk to the server</li>
            <li>Styled page using Bootstrap and custom CSS</li>
          </ul>
          <span className="h5">Environment / Technologies</span>
          <p>
            Java, JavaScript, Azure, Spring Framework, Spring Data, Spring Boot,
            Spring ORM, Spring AOP, Spring MVC, Azure DevOps, Azure SQL
            Databases, REST, Maven, JUnit, React
          </p>
        </Col>
      </Row>
    </Container>
  )
}
