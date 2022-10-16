import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"

export default function Blogs() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  `)

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <span className="h2">Latest Blogs</span>
          <span className="small mx-2">These are just here for looks </span>
          <FontAwesomeIcon icon="fa-regular fa-face-smile-wink" size="2x" />
          <div className="d-flex gap-5 my-5">
            {data.allMdx.nodes.map(node => (
              <Card border="light shadow">
                <Card.Body>
                  <Card.Title>{node.frontmatter.title}</Card.Title>
                  <Card.Text>{node.excerpt}</Card.Text>
                  <div className="small text-muted">
                    {node.frontmatter.date}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
