import React from "react"
import styled from "@emotion/styled"

export const Projects = () => {
  return (
    <div style={{ marginTop: "15%" }}>
      <div style={{ display: "flex", borderBottom: "2px solid black" }}>
        <ProjectsTitle>Projects</ProjectsTitle>
      </div>
      <ProjectContainer>
        <ProjectInfo>
          <h2>Music Meteorologist</h2>
          <ul>
            <li>
              Built with React, Redux, React Charts, Node.js, Python, PostgreSQL{" "}
            </li>
            <li>
              App that finds the user new music they've never listened to before
              by dynamically inputting songs into our cosine similarity
              algorithm
            </li>
            <li>
              User is able to clearly understand a song's characteristics with
              charts and tables
            </li>
            <li>
              Solely responsible for creating and maintaining flows aginst
              RESTful APIs
            </li>
          </ul>
        </ProjectInfo>
        <img
          style={{
            objectFit: "cover",
            marginBottom: 0,
            width: "50%",
            height: "100%",
          }}
          src="https://i.ibb.co/hcwQQ0S/Music-Meteorologist-Google-Chrome-5-6-2020-11-55-52-AM.png"
          alt="Music-Meteorologist"
        />
      </ProjectContainer>
      <ProjectContainer>
        <ProjectInfo>
          <h2>Drink Finder</h2>
          <ul>
            <li>
              Built with TypeScript, React, Chakra-UI, Apollo, GraphQL, Node.js,
              Prisma 2, Nexus, PostgreSQL
            </li>
            <li>
              Users are able to discover, post, like and comment on new drinks
            </li>
            <li>
              Live comments pushed to client using websockets/subscriptions
            </li>
            <li>
              Boosted performance and load times with apollo cache and infinite
              scroll
            </li>
          </ul>
        </ProjectInfo>
        <img
          style={{
            objectFit: "fill",
            marginBottom: 0,
            width: "50%",
            height: "100%",
            borderLeft: "3px solid black",
          }}
          src="https://i.ibb.co/pfYwNtB/Music-Meteorologist-Google-Chrome-5-6-2020-12-29-02-PM.png"
          alt="Music-Meteorologist-Google-Chrome-5-6-2020-12-29-02-PM"
        />
      </ProjectContainer>
      <ProjectContainer>
        <ProjectInfo>
          <h2>Covid-19 Tracker</h2>
          <ul>
            <li>Built with TypeScript, React, Chakra-UI</li>
            <li>
              Responsive web application that displays live coronavirus data &
              charts
            </li>
          </ul>
        </ProjectInfo>
        <img
          style={{
            objectFit: "fill",
            marginBottom: 0,
            width: "50%",
            height: "100%",
            borderLeft: "3px solid black",
          }}
          src="https://i.ibb.co/R3fk5yq/covid19.jpg"
          alt="covid19"
        />
      </ProjectContainer>
    </div>
  )
}

const ProjectsTitle = styled.div`
  border: 2px solid black;
  width: 10%;
  border-bottom: none;
  color: black;
  text-align: center;
`
const ProjectContainer = styled.div`
  border: 2px solid black;
  margin-top: 1%;
  color: black;
  display: flex;
  justify-content: space-between;
`

const ProjectInfo = styled.div`
  width: 50%;
  text-align: center;
  padding: 2%;
  ul {
    list-style-type: square;
    text-align: left;
  }
`
