import React from "react"
import * as styles from "./homePage.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface ICategoryData {
  routePath: string
  heading: string
  image: string
  alt: string
}
const categoryData: ICategoryData[] = [
  {
    routePath: "/portfolio/pixel_art",
    heading: "pixel art",
    image: "../../images/home/Egypt_s_Great_Pyramids1.jpg",
    alt: "Pixel egypt pyramid",
  },
  {
    routePath: "/portfolio/vector_art",
    heading: "vector art",
    image: "../../images/home/acorn_vector_art_stickers1.jpg",
    alt: "Pixel acorn",
  },
  {
    routePath: "/portfolio/watercolor",
    heading: "watercolor",
    image: "../../images/home/card_miss_you_3.jpg",
    alt: "Image wwith inscription: 'Miss you come home'",
  },
]

const HomePage = () => {
  return (
    <section className={styles.categories}>
      <StaticImage
        className={styles.logo}
        src="../../images/Pixelizabeth_logo.svg"
        alt="Pixelizabeth Logo"
        placeholder="blurred"
        layout="fixed"
      />
      <div className={styles.categories__wrapper}>
        <Link to="/portfolio/pixel_art" className={styles.category__item}>
          <h4 className={styles.category__heading}>pixel art</h4>
          <StaticImage
            src="../../images/home/Egypt_s_Great_Pyramids1.jpg"
            alt="Pixel egypt pyramid"
            placeholder="blurred"
            layout="fixed"
          />
        </Link>
        <Link to="/portfolio/vector_art" className={styles.category__item}>
          <h4 className={styles.category__heading}>vector art</h4>
          <StaticImage
            src="../../images/home/acorn_vector_art_stickers1.jpg"
            alt="Pixel acorn"
            placeholder="blurred"
            layout="fixed"
          />
        </Link>
        <Link to="/portfolio/watercolor" className={styles.category__item}>
          <h4 className={styles.category__heading}>watercolor</h4>
          <StaticImage
            src="../../images/home/card_miss_you_3.jpg"
            alt="Image wwith inscription: 'Miss you come home'"
            placeholder="blurred"
            layout="fixed"
          />
        </Link>
      </div>
    </section>
  )
}
export default HomePage
