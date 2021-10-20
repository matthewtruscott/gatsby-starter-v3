import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => (
  <div>
    <StaticImage
      src="../assets/images/gatsby-astronaut.png"
      width={300}
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Lorem ipsum dolor sit.</h1>
  </div>
)

export default HomePage
