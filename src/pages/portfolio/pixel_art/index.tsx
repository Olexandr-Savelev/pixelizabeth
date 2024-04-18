import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Seo from "../../../components/seo"

import * as styles from "./index.module.css"

import { transformImageData } from "../../../utils/transformImageData"
import { ImageData, ImageQueryData } from "../../../types/ImageData"

import Layout from "../../../components/Layout/layout"
import Gallery from "../../../components/Gallery/gallery"

const IndexPage = ({ data }: PageProps<ImageQueryData>) => {
  const images: ImageData[] = transformImageData(data)

  return (
    <Layout>
      <h3>Pixel Art</h3>
      <Gallery images={images} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pixel_art" }
      }
    ) {
      nodes {
        id
        publicURL
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="Pixel Art" />

export default IndexPage
