import React from "react"
// import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import NavigationBar from "./Navbar"

export default function Layout({ children }) {
  return (
    <Container>
      <NavigationBar />
      {children}
      <Footer />
    </Container>
  )
}
