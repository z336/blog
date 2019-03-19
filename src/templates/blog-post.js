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
        <h1 style={{ fontFamily: `Libre Baskerville` }}>
          {post.frontmatter.title}
        </h1>
        <h5>
          Posted by{" "}
          <Link to="/about" className="author">
            {post.frontmatter.author}
          </Link>{" "}
          on {post.frontmatter.date}
        </h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/">
          <em>Back</em>
        </Link>
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
