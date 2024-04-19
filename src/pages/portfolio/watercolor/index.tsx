import * as React from "react"
import { HeadFC } from "gatsby"
import Seo from "../../../components/seo"

import PortfolioLayout from "../../../components/PortfolioLayout/portfolioLayout"

const IndexPage = () => <PortfolioLayout>Watercolor</PortfolioLayout>

export const Head: HeadFC = () => <Seo title="Watercolor" />

export default IndexPage
