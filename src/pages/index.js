import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ListOfPropertyCard from "../components/list-of-property-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ListOfPropertyCard />
    </div>
  </Layout>
)

export default IndexPage
