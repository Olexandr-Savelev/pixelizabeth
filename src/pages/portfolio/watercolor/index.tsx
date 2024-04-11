import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../../../components/Layout/layout"
import Seo from "../../../components/seo"

const IndexPage = () => <Layout>Watercolor</Layout>

export const Head: HeadFC = () => <Seo title="Watercolor" />

export default IndexPage
