import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <About />
    </Layout>
  )
}
