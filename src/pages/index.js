import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills id="skills" />
    </Layout>
  )
}
