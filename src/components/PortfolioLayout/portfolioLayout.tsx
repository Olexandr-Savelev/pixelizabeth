import * as React from "react"
import SubNav from "../SubNav/subNav"
import Layout from "../Layout/layout"
const PortfolioLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <SubNav />
      {children}
    </Layout>
  )
}

export default PortfolioLayout
