/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import path from "path"

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: path.resolve("./src/templates/using-dsg.tsx"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async ({ graphql, actions }: any) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/portfolio/`,
    toPath: `/portfolio/pixel_art`,
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }: any) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
