import * as React from "react"
import { HeadFC } from "gatsby"
import PortfolioLayout from "../../../components/PortfolioLayout/portfolioLayout"
import Seo from "../../../components/seo"

const IndexPage = () => {
  return <PortfolioLayout>Vector Art</PortfolioLayout>
}

export const Head: HeadFC = () => <Seo title="Vector Art" />

export default IndexPage
