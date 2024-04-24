import { IGatsbyImageData } from "gatsby-plugin-image"
export interface ImageData {
  id: string
  publicURL: string
  gatbyImageData: IGatsbyImageData
  orderNum: number
  altText: string
}

export interface ImageQueryData {
  allFile: AllFile
}

interface AllFile {
  nodes: Node[]
}

interface Node {
  id: string
  publicURL: string
  childImageSharp: ChildImageSharp
}

interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData
  original: Original
  fluid: Fluid
}

interface Fluid {
  originalName: string
}

interface Original {
  src: string
}
