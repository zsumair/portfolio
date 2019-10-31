import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <h4 style={{ margin: 0 }}>
      <AniLink
        style={{
          color: `#F26157`,
          textDecoration: `none`,
          fontFamily: `Rubik`,
          fontSize: `24px`,
        }}
      >
        {siteTitle}
      </AniLink>
    </h4>
    <ul className="nav-links">
      <li>
        <AniLink paintDrip to="/about" duration={1.5} hex="#F26157">
          About
        </AniLink>
      </li>
      <li>
        <AniLink fade to="/work" duration={0.3}>
          Work
        </AniLink>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
