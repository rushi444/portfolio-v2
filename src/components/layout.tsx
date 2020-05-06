/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import "./layout.css"

interface IProps {
  children?: any
}

const Layout: FC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: "2%", color: 'black' }}>
          More projects on my Github:
          <a
            style={{ textDecoration: "underlined", color: "black" }}
            href="https://github.com/rushi444"
          >
            rushi444
          </a>
          , feel free to reach out to me at{" "}
          <a
            style={{ textDecoration: "underlined", color: "black" }}
            href="mailto:rushi44@gmail.com"
          >
            rushi44@gmail.com
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
