import * as React from "react"
import { useState, useMemo } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./gallery.module.css"
import { ImageData } from "../../types/ImageData"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import Loader from "../../images/bouncing-squares.inline.svg"

interface GalleryProps {
  images: ImageData[]
  location: "pixel_art" | "vector_art" | "watercolor"
}

function Gallery({ images, location }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1)

  const lightboxImages = useMemo(() => {
    return images.map(image => ({
      src: image.publicURL,
    }))
  }, [location])

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

  return (
    <>
      <div className={galleryStyles}>
        {images.map(({ id, altText, gatbyImageData }, index) => (
          <div
            className={styles.gallery__item}
            key={id}
            onClick={() => {
              setCurrentImageIndex(index)
            }}
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="300"
            data-sal-easing="ease"
          >
            <GatsbyImage image={gatbyImageData} alt={altText} />
          </div>
        ))}
      </div>
      <Lightbox
        slides={lightboxImages}
        open={currentImageIndex >= 0}
        index={currentImageIndex}
        close={() => setCurrentImageIndex(-1)}
        render={{
          iconLoading: () => (
            <div style={{ width: "150px", padding: 20 }}>
              <Loader />
            </div>
          ),
        }}
        noScroll={{ disabled: true }}
      />
    </>
  )
}

export default Gallery
