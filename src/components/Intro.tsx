import React from "react"
import styled from "@emotion/styled"

import Image from "./image"

export const Intro = () => {
  return (
    <IntroContainer>
      <div>
        <h1>
          Hi there.
          <br /> I'm Rushi.
        </h1>
        <p>
          I'm a Full Stack Developer currently working @ Northwestern
          Mutual
        </p>
      </div>
      <div style={{ width: "40%", maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: black;
    font-size: 3rem;
  }
  p {
    font-size: 28px;
    line-height: 1;
    color: black;
    padding-right: 10%;
  }
`
