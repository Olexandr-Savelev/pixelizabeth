import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../../../components/Layout/layout"
import Seo from "../../../components/seo"

const IndexPage = () => <Layout>Pixel Art</Layout>

export const Head: HeadFC = () => <Seo title="Pixel Art" />

export default IndexPage
