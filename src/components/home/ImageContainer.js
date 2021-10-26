import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ImageContainer = () => {
  return (
    <StaticImage
      src="../../assets/images/gatsby-astronaut.png"
      width={300}
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  )
}

export default ImageContainer
