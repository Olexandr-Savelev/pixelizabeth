import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header siteTitle={"Pixelizabeth portfolio"} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
