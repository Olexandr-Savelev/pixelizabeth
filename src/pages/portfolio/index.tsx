import * as React from "react"
import { HeadFC, navigate } from "gatsby"
import Seo from "../../components/seo"

const IndexPage = () => {
  navigate("/portfolio/pixel_art", { replace: true })
  return <></>
}

export const Head: HeadFC = () => <Seo />

export default IndexPage
