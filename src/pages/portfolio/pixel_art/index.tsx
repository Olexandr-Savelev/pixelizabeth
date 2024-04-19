import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Seo from "../../../components/seo"

import * as styles from "./index.module.css"

import { transformImageData } from "../../../utils/transformImageData"
import { ImageData, ImageQueryData } from "../../../types/ImageData"

import PortfolioLayout from "../../../components/PortfolioLayout/portfolioLayout"
import Gallery from "../../../components/Gallery/gallery"

const IndexPage = ({ data }: PageProps<ImageQueryData>) => {
  const images: ImageData[] = transformImageData(data)

  return (
    <PortfolioLayout>
      <p
        className={styles.description}
        data-sal="slide-up"
        data-sal-delay="150"
        data-sal-duration="400"
        data-sal-easing="ease"
      >
        Illustrations, patterns, emotes, icons. I love to do silly dailies, fan
        art and concepts. I do comissions for portraits and game assets. Most of
        big projects were under NDA so I can show a preview only, contact me!
      </p>
      <Gallery images={images} />
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
