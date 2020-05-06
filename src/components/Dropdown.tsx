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
          <a href="https://www.linkedin.com/in/rushi-arumalla/" />
          LinkedIn
        </Link>
        <Link>
          <a href="" />
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
  border: 2px solid black;
  display: block;
  margin: 0 auto;
  display: none;
  position: absolute;
  li:last-child {
    border-bottom: none;
  }
`

const Link = styled.li`
  list-style-type: none;
  padding: 0 0.5rem;
  color: black;
  margin: 0;
  border-bottom: 2px solid black;
  a {
    color: black;
    text-decoration: none;
  }
`
