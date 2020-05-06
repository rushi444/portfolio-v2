import React from "react"
import styled from "@emotion/styled"

export const Skills = () => {
  return (
    <div style={{marginTop: '15%'}}>
      <div style={{ display: "flex", borderBottom: "2px solid black" }}>
        <SkillsTitle>Skills</SkillsTitle>
      </div>
      <div style={{marginTop: '1%'}}>
        <ul style={{ listStyleType: 'square', color: 'black', columns: 3, WebkitColumns: 3, MozColumns: 3}}>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS(LESS, SASS)</li>
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  )
}

const SkillsTitle = styled.div`
  border: 2px solid black;
  width: 10%;
  border-bottom: none;
  color: black;
  text-align: center;
`
