import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../../components/Layout/layout"
import Seo from "../../../components/seo"
import Img from "gatsby-image"
import * as styles from "./index.module.css"
import { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const images = data.allFile.nodes
    .map(node => {
      const originalName = node.childImageSharp!.fluid!.originalName
      const orderNum = +originalName!.slice(0, 2)
      const altText = originalName!.slice(3).replace(/_/g, " ")

      return {
        id: node.id,
        publicURL: node.publicURL,
        fluid: node.childImageSharp?.fluid,
        orderNum,
        altText,
      }
    })
    .sort((a, b) =>
      a.orderNum !== null && b.orderNum !== null ? a.orderNum - b.orderNum : 0
    )

  const [currentImageIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <Layout>
      <h3>Pixel Art</h3>
      <div className={styles.gallery}>
        {images.map(({ id, fluid, altText }, index) => (
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="400"
            data-sal-easing="ease"
            key={id}
            onClick={() => {
              setCurrentIndex(index)
            }}
          >
            <Img key={id} fluid={fluid} alt={`${altText}`} />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <Lightbox
          mainSrc={images[currentImageIndex].publicURL!}
          nextSrc={images[(currentImageIndex + 1) % images.length].publicURL!}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length]
              .publicURL!
          }
          onCloseRequest={() => {
            setCurrentIndex(null)
          }}
          onMovePrevRequest={() =>
            setCurrentIndex(
              (currentImageIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentImageIndex + 1) % images.length)
          }
        />
      )}
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
