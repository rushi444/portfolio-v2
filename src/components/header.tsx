import React, { FC } from "react"
import styled from "@emotion/styled"
import { Dropdown } from "./Dropdown"

interface IProps {
  siteTitle: string
}

export const Header: FC<IProps> = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <Dropdown />
    </HeaderContent>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  background-color: white;
  margin-bottom: 1.45rem;
  max-width: 960;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 2.0875rem;
  display: flex;
  flex-direction: row-reverse;
`
