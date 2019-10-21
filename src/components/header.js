import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <h4 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#F26157`,
          textDecoration: `none`,
          fontFamily: `Rubik`,
          fontSize: `24px`,
        }}
      >
        {siteTitle}
      </Link>
    </h4>
    <ul className="nav-links">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
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
