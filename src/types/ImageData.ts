export interface ImageData {
  id: string
  publicURL: string
  fluid: any
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
  fluid: Fluid
}
interface Fluid {
  sizes: string
  originalName: string
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
}
