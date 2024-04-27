// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
//  */

// /**
//  * @type {import('gatsby').GatsbySSR['onRenderBody']}
//  */

import * as React from "react"

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      key="squarePegFont"
      rel="preload"
      href="/fonts/SquarePeg-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="workSansFont"
      rel="preload"
      href="/fonts/WorkSans[wght].woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]),
    setHtmlAttributes({ lang: `en` })
}
