import { ImageQueryData } from "../types/ImageData"

export const transformImageData = (data: ImageQueryData) => {
  return data.allFile.nodes
    .map(node => {
      const originalName = node.childImageSharp.fluid.originalName
      const orderNumMatch = originalName.match(/^\d+/)
      const orderNum = orderNumMatch ? +orderNumMatch[0] : 0
      const altText = originalName
        .replace(/^[\d_]+/, "")
        .replace(/_/g, " ")
        .replace(/\.[^.]*$/, "")

      return {
        id: node.id,
        gatbyImageData: node.childImageSharp.gatsbyImageData,
        orderNum,
        altText,
        src: node.publicURL,
      }
    })
    .sort((a, b) => a.orderNum - b.orderNum)
}
