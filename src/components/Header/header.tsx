import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import { useLocation } from "@reach/router"

import Burger from "../UI/Burger/burger"

interface HeaderProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      {location.pathname === "/" ? (
        <div></div>
      ) : (
        <Link className={styles.logo} to="/">
          Pixelizabeth
        </Link>
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
