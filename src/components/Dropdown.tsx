import React, { FC } from "react"
import styled from "@emotion/styled"

export const Dropdown: FC = () => {
  return (
    <DropdownContainer>
      <LinksTitle>Links</LinksTitle>
      <LinksContainer>
        <Link>
          <a href="https://github.com/rushi444">Github</a>
        </Link>
        <Link>
          <a href="https://www.linkedin.com/in/rushi-arumalla/">LinkedIn</a>
        </Link>
        <Link>
          <a href="https://resume.creddle.io/resume/4u4rwrybeaw">Resume</a>
        </Link>
      </LinksContainer>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20%;
  :hover {
    ul {
      display: block;
    }
  }
`

const LinksTitle = styled.h4`
  color: black;
  margin-bottom: 0;
  font-weight: 600;
`

const LinksContainer = styled.ul`
  display: block;
  margin: 0 auto;
  display: none;
  position: absolute;
  li:last-child {
    border-bottom: 2px solid black;
  }
`

const Link = styled.li`
  list-style-type: none;
  padding: 0 0.5rem;
  color: black;
  margin: 0;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  :hover {
    background-color: lightgray;
  }
  a {
    color: black;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`
