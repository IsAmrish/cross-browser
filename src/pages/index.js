import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ height: "75vh" }}>
      <h1>Hallo!!</h1>
    </div>
  </Layout>
)

export default IndexPage
