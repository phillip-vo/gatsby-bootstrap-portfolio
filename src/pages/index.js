import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import About from "../components/About"
import Blogs from "../components/Blogs"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <br />
      <Blogs />
      <br />
      <Projects />
      <br />
      <Skills />
      <br />
      <About />
    </Layout>
  )
}
