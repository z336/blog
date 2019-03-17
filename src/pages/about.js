import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h2 style={{ fontFamily: `Libre Baskerville` }}>Jon Coleman</h2>
    <p>All about me</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
      quisquam. Tenetur dolores aliquam fugit, enim debitis iste dicta quas
      incidunt obcaecati adipisci molestias minima. Itaque, reprehenderit!
      Aperiam soluta excepturi placeat?
    </p>
    <Link to="/">Back</Link>
  </Layout>
)

export default AboutPage
