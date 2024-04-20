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
          "Illustrations, patterns, emotes, icons. I love to do silly dailies, fan art and concepts. I do comissions for portraits and game assets. Most of big projects were under NDA so I can show a preview only, contact me!"
        }
      />

      <Gallery images={images} location="pixel_art" />
    </PortfolioLayout>
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
