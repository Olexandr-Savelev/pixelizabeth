import * as React from "react"
import { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import * as styles from "./gallery.module.css"
import { ImageData } from "../../types/ImageData"

interface GalleryProps {
  images: ImageData[]
  location: "pixel_art" | "vector_art" | "watercolor"
}

function Gallery({ images, location }: GalleryProps) {
  let galleryStyles

  switch (location) {
    case "pixel_art":
      galleryStyles = styles.pixel_art
      break
    case "vector_art":
      galleryStyles = styles.vector_art
      break
    case "watercolor":
      galleryStyles = styles.watercolor
      break
    default:
      break
  }

  const [currentImageIndex, setCurrentIndex] = useState<number | null>(null)
  return (
    <>
      <div className={galleryStyles}>
        {images.map(({ id, fluid, altText }, index) => (
          <div
            className={styles.gallery__item}
            key={id}
            onClick={() => {
              setCurrentIndex(index)
            }}
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="300"
            data-sal-easing="ease"
          >
            <Img key={id} fluid={fluid} alt={altText} />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <Lightbox
          mainSrc={images[currentImageIndex].publicURL}
          nextSrc={images[(currentImageIndex + 1) % images.length].publicURL}
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
    </>
  )
}

export default Gallery
