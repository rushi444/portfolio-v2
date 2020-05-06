import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroContainer>
      <div>
        <h1>
          Hi there.
          <br /> I'm Rushi.
        </h1>
        <p>
          I'm a Full Stack Developer with a strong foundation eager to learn and
          master new technologies.
        </p>
      </div>
      <div style={{ width: '40%', maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </IntroContainer>
  </Layout>
)

export default IndexPage

const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: black;
    font-size: 3rem;
  }
  p {
    color: black;
    padding-right: 10%;
  }
`
