import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 672,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily: `Libre Baskerville` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <hr />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
