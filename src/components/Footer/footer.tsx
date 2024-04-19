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
            <a href="">ArtStation</a>
            <a href="">Twitter</a>
            <a href="">Itch.io</a>
          </div>
          <div className={styles.block}>
            <a href="">AdobeStock</a>
            <a href="">Shutterstock</a>
            <a href="">VectorStock</a>
          </div>
          <div className={styles.block}>
            <a href="">DepositPhotos</a>
            <a href="">Dreamstime</a>
          </div>
        </div>
      </div>
      <span className={styles.line}></span>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved. Designed with ❤️ by Your Name.
        </p>
      </div>
    </footer>
  )
}

export default Footer
