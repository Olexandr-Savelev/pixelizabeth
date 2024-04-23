import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./footer.module.css"

import React from "react"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_content}>
          <div className={styles.block}>
            <StaticImage
              src="../../images/Pixelizabeth_logo.png"
              alt="Pixelizabeth Logo"
              placeholder="blurred"
              layout="fixed"
            />
            <a className={styles.mail} href="mailto:elimaximova@gmail.com">
              elimaximova@gmail.com
            </a>
          </div>
          <div className={styles.block}>
            {" "}
            <a href="https://pixelizabeth.artstation.com/" target="_blank">
              ArtStation
            </a>
            <a href="https://twitter.com/pixelizabethh" target="_blank">
              Twitter
            </a>
            <a href="https://pixelizabeth.itch.io/" target="_blank">
              Itch.io
            </a>
          </div>
          <div className={styles.block}>
            <a
              href="https://stock.adobe.com/contributor/210953913/pixelizabeth"
              target="_blank"
            >
              AdobeStock
            </a>
            <a
              href="https://www.shutterstock.com/g/pixelizabeth"
              target="_blank"
            >
              Shutterstock
            </a>
            <a
              href="https://www.vectorstock.com/royalty-free-vectors/vectors-by_Pixelizabeth"
              target="_blank"
            >
              VectorStock
            </a>
          </div>
          <div className={styles.block}>
            <a
              href="https://depositphotos.com/portfolio-13022366.html?content=photo"
              target="_blank"
            >
              DepositPhotos
            </a>
            <a
              href="https://www.dreamstime.com/elimaximova_info"
              target="_blank"
            >
              Dreamstime
            </a>
          </div>
        </div>
      </div>
      <span className={styles.line}></span>
      <div className="container">
        <p>
          Yelyzaveta Shevchenko, pixel and vector artist. All rights reserved.
          Designed by Pixelizabeth, website and support by Olexander Saveliev.{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
