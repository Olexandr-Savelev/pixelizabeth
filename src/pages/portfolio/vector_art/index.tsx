import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Seo from "../../../components/seo"

import { transformImageData } from "../../../utils/transformImageData"
import { ImageData, ImageQueryData } from "../../../types/ImageData"

import PortfolioLayout from "../../../components/PortfolioLayout/portfolioLayout"
import Gallery from "../../../components/Gallery/gallery"
import PageDescription from "../../../components/UI/PageDescription/pageDescription"

const IndexPage = ({ data }: PageProps<ImageQueryData>) => {
  const images: ImageData[] = transformImageData(data)

  return (
    <PortfolioLayout>
      <PageDescription
        text={
          "Seamless patterns and illustrations, stickers and prints. Could be used anywhere as backgrounds, wrappings, textures, wallpapers."
        }
      />
      <Gallery images={images} location="vector_art" />
    </PortfolioLayout>
  )
}

export const query = graphql`
  query IndexPage {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "vector_art" }
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

export const Head: HeadFC = () => <Seo title="Vector Art" />

export default IndexPage
