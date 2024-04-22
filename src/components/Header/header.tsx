import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import { useLocation } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"

import Burger from "../UI/Burger/burger"

interface HeaderProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const router = useLocation()

  return (
    <header className={styles.header}>
      {router.pathname === "/" ? (
        <div></div>
      ) : (
        <div className={styles.logo}>
          <StaticImage
            className={styles.logo}
            src="../../images/Pixelizabeth_logo.png"
            alt="Pixelizabeth Logo"
            placeholder="blurred"
            layout="fixed"
          />
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
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header
