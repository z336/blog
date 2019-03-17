import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h1 style={{ fontFamily: `Roboto` }}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </h1>
          <small>
            Posted by{" "}
            <Link to="/about" className="author">
              {post.node.frontmatter.author}
            </Link>{" "}
            on {post.node.frontmatter.date}
          </small>
          <br />
          <br />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default Index
