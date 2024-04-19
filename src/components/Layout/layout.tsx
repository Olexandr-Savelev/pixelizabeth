import * as React from "react"

import Header from "../Header/header"
import * as styles from "./layout.module.css"
import Footer from "../Footer/footer"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content + " container"}>
        <Header />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
