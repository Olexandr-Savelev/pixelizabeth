import React from "react"
import * as styles from "./homePage.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HomePage = () => {
  return (
    <section>
      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="400"
        data-sal-easing="ease"
        className={styles.logo}
      >
        <StaticImage
          src="../../images/Big_pixelizabeth_logo.png"
          alt="Pixelizabeth Logo"
          placeholder="blurred"
          layout="fixed"
        />
      </div>

      <div
        className={styles.categories__wrapper}
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="400"
        data-sal-easing="ease"
      >
        <Link to="/portfolio/pixel_art" className={styles.category__item}>
          <h4 className={styles.category__heading}>pixel art</h4>
          <StaticImage
            src="../../images/home/Egypt_s Great Pyramids_of_Giza.jpg"
            alt="Pixel Egypt pyramids of Giza"
            placeholder="blurred"
            height={576}
            layout="fixed"
          />
        </Link>
        <Link to="/portfolio/vector_art" className={styles.category__item}>
          <h4 className={styles.category__heading}>vector art</h4>
          <StaticImage
            src="../../images/home/acorn_vector_art_illustration.png"
            alt="Acorn greets"
            placeholder="blurred"
            height={576}
            layout="fixed"
          />
        </Link>
        <Link to="/portfolio/watercolor" className={styles.category__item}>
          <h4 className={styles.category__heading}>watercolor</h4>
          <StaticImage
            src="../../images/home/card_miss_you_3.jpg"
            alt="Image with inscription: 'Miss you! Come home'"
            placeholder="blurred"
            height={576}
            layout="fixed"
          />
        </Link>
      </div>
    </section>
  )
}
export default HomePage
