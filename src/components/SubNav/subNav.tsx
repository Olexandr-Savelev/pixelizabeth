import { Link } from "gatsby"
import React from "react"
import * as styles from "./subNav.module.css"

function SubNav() {
  return (
    <nav
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="400"
      data-sal-easing="ease"
    >
      <ul className={styles.subnav__list}>
        <li>
          <Link
            className={styles.subnav_link}
            activeClassName={styles.subnav_link__active}
            to="/portfolio/pixel_art"
          >
            Pixel art
          </Link>
        </li>
        <li>
          <Link
            className={styles.subnav_link}
            activeClassName={styles.subnav_link__active}
            to="/portfolio/vector_art"
          >
            Vector art
          </Link>
        </li>
        <li>
          <Link
            className={styles.subnav_link}
            activeClassName={styles.subnav_link__active}
            to="/portfolio/watercolor"
          >
            Watercolor
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SubNav
