import * as React from "react"

import Header from "../Header/header"
import * as styles from "./layout.module.css"
import Footer from "../Footer/footer"
import { useState } from "react"
import BurgerMenu from "../UI/BurgerMenu/burgerMenu"
import cn from "classnames"

const Layout = ({ children }: React.PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.unscrollable]: isMenuOpen,
      })}
    >
      <div className={styles.content + " container"}>
        <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
