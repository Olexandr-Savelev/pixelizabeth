import React from "react"
import * as styles from "./burgerMenu.module.css"
import { Link } from "gatsby"
import cn from "classnames"

interface BurgerMenuProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  return (
    <nav
      className={cn(styles.menu, {
        [styles.open]: isOpen,
      })}
    >
      <ul className={styles.nav__list}>
        <li>
          <Link
            className={styles.menu__link}
            activeClassName={styles.nav_link__active}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.menu__link}
            activeClassName={styles.nav_link__active}
            partiallyActive={true}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={styles.menu__link}
            activeClassName={styles.nav_link__active}
            to="/contact"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BurgerMenu
