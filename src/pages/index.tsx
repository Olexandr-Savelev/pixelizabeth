import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import HomePage from "../components/HomePage/homePage"

const IndexPage = () => (
  <Layout>
    <HomePage></HomePage>
  </Layout>
)

export const Head: HeadFC = () => <Seo />

export default IndexPage
