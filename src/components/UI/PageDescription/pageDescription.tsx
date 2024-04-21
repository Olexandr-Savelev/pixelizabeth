import React from "react"
import * as styles from "./pageDescription.module.css"

const pageDescription: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p
      className={styles.description__text}
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="300"
      data-sal-easing="ease"
    >
      {text}
    </p>
  )
}

export default pageDescription
