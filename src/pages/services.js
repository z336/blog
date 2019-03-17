import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
      quisquam. Tenetur dolores aliquam fugit, enim debitis iste dicta quas
      incidunt obcaecati adipisci molestias minima. Itaque, reprehenderit!
      Aperiam soluta excepturi placeat?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
      quisquam. Tenetur dolores aliquam fugit, enim debitis iste dicta quas
      incidunt obcaecati adipisci molestias minima. Itaque, reprehenderit!
      Aperiam soluta excepturi placeat?
    </p>
    <Link to="/">Go home</Link>
  </Layout>
)

export default ServicesPage
