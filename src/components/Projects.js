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
          <span className="h2" id="projects">
            Projects
          </span>
          <span className="small mx-2">There's some good stuff here </span>
          <FontAwesomeIcon icon="fa-regular fa-face-grimace" size="2x" />
        </Col>
      </Row>
      <Row className="my-5 py-5">
        <Col xs={12} lg={6} className="text-center">
          <StaticImage
            src="../images/daniel-korpai-aUmq85-2V7I-unsplash.jpg"
            alt="Laptop image by Daniel Korpai"
            width={400}
            className="rounded shadow opacity-75"
          />
        </Col>
        <Col xs={12} lg={6} className="my-5">
          <span className="display-6">Retrovure Video Game Store</span>
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
          <div className="d-flex gap-4">
            <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-up-right-from-square"
              size="2x"
            />
          </div>
        </Col>
      </Row>
      <Row className="my-5 py-5">
        <Col xs={12} lg={6} className="my-5">
          <span className="display-6">Web Application with ORM</span>
          <hr />
          <p>
            A web application leveraging Hibernate or Spring Data to produce
            either a RESTful service or a Servlet application with Tomcat,
            deployed remotely to an Azure virtual machine.
          </p>
          <span className="h5">Roles / Responsibilities</span>
          <ul>
            <li>
              Create a full-stack application Utilizing JSP/CSS in the frontend
              and Java in the backend
            </li>
            <li>Utilized Hibernate to talk to Azure SQL Databases</li>
            <li>
              Executed a Front-Controller architecture to handle requests and
              dispatches
            </li>
          </ul>
          <span className="h5">Environment / Technologies</span>
          <p>
            Servlets, Hibernate, Azure SQL Databases, Spring Data, Spring Boot,
            Spring AOP, Spring Framework
          </p>
          <div className="d-flex gap-4">
            <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-up-right-from-square"
              size="2x"
            />
          </div>
        </Col>
        <Col xs={12} lg={6} className="text-center">
          <StaticImage
            src="../images/daniel-korpai-pKRNxEguRgM-unsplash.jpg"
            alt="Laptop image by Daniel Korpai"
            width={400}
            className="rounded shadow opacity-75"
          />
        </Col>
      </Row>
    </Container>
  )
}
