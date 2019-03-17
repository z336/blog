import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Blog Post" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1 style={{ fontFamily: `Roboto` }}>{post.frontmatter.title}</h1>
        <h4>
          Posted by{" "}
          <Link to="/about" style={{ color: `#66cdaa` }}>
            {post.frontmatter.author}
          </Link>{" "}
          on {post.frontmatter.date}
        </h4>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/">Back</Link>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
