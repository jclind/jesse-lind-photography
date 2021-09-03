import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Takes images prop which holds gatsbyImage and title {gatsbyImage, title, id}
const ImageLayout = ({ images }) => {
  // Heights of each photo column
  let col1Height = 0,
    col2Height = 0
  // Arrays of images to go in each column
  const col1Images = [],
    col2Images = []

  // Sorts through each image in the "images" array and
  // places them in their respective columns so that the column heights are close to equal
  images.forEach(item => {
    const gatsbyImage = item.gatsbyImage.gatsbyImageData

    const width = gatsbyImage.width
    const height = gatsbyImage.height
    // ratio will equal height / width. All widths will be the same so we want
    // to find the realative height of each image based on that ratio.
    const ratio = height / width

    // places image in shortest column
    if (col1Height <= col2Height) {
      col1Height += ratio
      col1Images.push({ gatsbyImage, id: item.id, title: item.title })
    } else {
      col2Height += ratio
      col2Images.push({ gatsbyImage, id: item.id, title: item.title })
    }
  })

  let currPathname
  // Check if window is defined
  if (typeof window !== "undefined") {
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
              state={{ images, pathname: currPathname }}
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
              state={{ images, pathname: currPathname }}
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
