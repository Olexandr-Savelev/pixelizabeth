import * as React from "react"
import { HeadFC } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/Layout/layout"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="200"
          data-sal-easing="ease"
        >
          <StaticImage
            src="../../images/girls_with_bubblegum.png"
            alt="Girl with bubblegum"
            placeholder="blurred"
            layout="fixed"
          />
        </div>

        <div
          className={styles.about__info}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          <h3 className={styles.about__heading}>Hello There!</h3>
          <p className={styles.about__paragraph}>
            My name is Elizabeth. I create pixel art portraits, game assets,
            isometric illustrations; vector art seamless patterns and stickers;
            watercolor sketches and greeting cards. I am ready to discuss
            projects of any size, whether it is business card design or a game
            dev. Love to do concepts and mockups.
          </p>
        </div>
      </div>
      <div
        className={styles.contact}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="400"
        data-sal-easing="ease"
      >
        <p className={styles.contact__text}> For any questions:</p>

        <a className={styles.contact__btn} href="mailto:elimaximova@gmail.com">
          Contact me
        </a>
      </div>
    </div>
  </Layout>
)

export const Head: HeadFC = () => <Seo title="Contact" />

export default IndexPage
