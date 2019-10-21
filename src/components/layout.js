/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div style={{ float: `left` }}>
          © {new Date().getFullYear()}, Built with
          <a style={{ paddingLeft: `6px` }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
        <ul className="social-icons">
          <li>
            <SocialIcon
              network="twitter"
              style={{ height: 25, width: 25 }}
              url="https://twitter.com/zsumair"
            />
          </li>
          <li>
            <SocialIcon
              network="github"
              bgColor="rgba(0,0,0,0.7)"
              fgColor="#fff"
              style={{ height: 25, width: 25 }}
              url="https://github.com/zsumair"
            />
          </li>
          <li>
            <SocialIcon
              network="linkedin"
              style={{ height: 25, width: 25 }}
              url="https://www.linkedin.com/in/zsumair/"
            />
          </li>
        </ul>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
