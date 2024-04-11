import * as React from "react"
import { HeadFC } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/Layout/layout"

const IndexPage = () => (
  <Layout>
    <section>
      <h3>Portfolio PAGE</h3>
    </section>
  </Layout>
)

export const Head: HeadFC = () => <Seo title="Home" />

export default IndexPage
