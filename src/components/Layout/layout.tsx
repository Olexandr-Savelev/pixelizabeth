import * as React from "react"

import Header from "../Header/header"
import * as styles from "./layout.module.css"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
