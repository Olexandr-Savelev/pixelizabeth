import { ImageQueryData } from "../types/ImageData"

export const transformImageData = (data: ImageQueryData) => {
  return data.allFile.nodes
    .map(node => {
      const originalName = node.childImageSharp.fluid.originalName
      const orderNum = +originalName.slice(0, 2)
      const altText = originalName.slice(3).replace(/_/g, " ")

      return {
        id: node.id,
        publicURL: node.publicURL,
        fluid: node.childImageSharp?.fluid,
        orderNum,
        altText,
      }
    })
    .sort((a, b) => a.orderNum - b.orderNum)
}
