import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import  Tabs  from "../components/Tabs"
import { Intro } from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Tabs />
  </Layout>
)

export default IndexPage


