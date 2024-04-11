// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
//  */

// /**
//  * @type {import('gatsby').GatsbySSR['onRenderBody']}
//  */

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/WorkSans[wght].woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
  ])
}
