import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Takes images prop which holds gatsbyImage and title {gatsbyImage, title, id}
const ImageLayout = ({ images }) => {
  let col1Height = 0,
    col2Height = 0
  const col1Images = [],
    col2Images = []

  images.forEach(item => {
    const gatsbyImage = item.gatsbyImage.gatsbyImageData

    const width = gatsbyImage.width
    const height = gatsbyImage.height
    // ratio will equal height / width. All widths will be the same so we want
    // to find the realative height of each image based on that ratio.
    const ratio = height / width

    if (col1Height <= col2Height) {
      col1Height += ratio
      col1Images.push({ gatsbyImage, id: item.id, title: item.title })
    } else {
      col2Height += ratio
      col2Images.push({ gatsbyImage, id: item.id, title: item.title })
    }
  })

  // Check if window is defined
  const isBrowser = typeof window !== "undefined"
  let currPathname
  if (isBrowser) {
    currPathname = window.location.pathname
  }
  return (
    <section className="image-layout">
      <div className="col-1">
        {col1Images.map(item => {
          const { gatsbyImage, id, title } = item
          const pathToImage = getImage(gatsbyImage)
          return (
            <Link
              to={`/photos/${id}`}
              state={{ images, id, pathname: currPathname }}
              key={id}
            >
              <GatsbyImage image={pathToImage} alt={title} />
            </Link>
          )
        })}
      </div>
      <div className="col-2">
        {col2Images.map(item => {
          const { gatsbyImage, id, title } = item
          const pathToImage = getImage(gatsbyImage)

          return (
            <Link
              to={`/photos/${id}`}
              state={{ images, id, pathname: currPathname }}
              key={id}
            >
              <GatsbyImage image={pathToImage} alt={title} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ImageLayout
