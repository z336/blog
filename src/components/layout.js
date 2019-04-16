import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styles from "./layout.module.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.container}>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
