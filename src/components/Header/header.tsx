import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import { useLocation } from "@reach/router"

const Header = () => {
  const router = useLocation()
  return (
    <header className={styles.header}>
      {router.pathname === "/" ? (
        <div></div>
      ) : (
        <div className={styles.logo}>
          <img src="/images/Pixelizabeth_logo.svg" alt="logo" />
        </div>
      )}
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_link__active}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_link__active}
              partiallyActive={true}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_link__active}
              to="/contact"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
