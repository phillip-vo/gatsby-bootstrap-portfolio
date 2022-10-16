import React from "react"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import NavigationBar from "./Navbar"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"

library.add(fab, far, fas)

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <NavigationBar />
        {children}
      </Container>
      <Footer />
    </>
  )
}
