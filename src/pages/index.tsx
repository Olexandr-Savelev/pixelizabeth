import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => <Layout></Layout>

export const Head: HeadFC = () => <Seo title="Home" />

export default IndexPage
