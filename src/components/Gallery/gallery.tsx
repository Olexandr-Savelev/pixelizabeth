import * as React from "react"
import { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import * as styles from "./gallery.module.css"
import { ImageData } from "../../types/ImageData"

interface GalleryProps {
  images: ImageData[]
}

function Gallery({ images }: GalleryProps) {
  const [currentImageIndex, setCurrentIndex] = useState<number | null>(null)
  return (
    <>
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
    </>
  )
}

export default Gallery
