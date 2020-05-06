import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Intro } from "../components/Intro"
import { Skills } from "../components/Skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Skills />
  </Layout>
)

export default IndexPage


