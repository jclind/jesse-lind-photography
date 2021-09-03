import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const ImageTemplate = ({ location: { state }, data: { contentfulImage } }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [pageHeight, setPageHeight] = useState("100vh")

  const currImage = contentfulImage
  const date = (function () {
    if (contentfulImage.dateTaken) {
      const d = new Date(contentfulImage.dateTaken)
      return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
    }
    return "Unknown"
  })()
  const location = contentfulImage.locationTaken
    ? contentfulImage.locationTaken
    : "Unknown"
  const { title } = contentfulImage
  const images = state?.images ? state.images : [currImage]
  const pathname = state?.pathname ? state.pathname : "/"

  // const currImage = images.find(image => {
  //   return image.id === id
  // })
  const pathToImage = getImage(currImage.image)

  function getPrevImageId(images, currImage) {
    let currIdx = images.findIndex(x => x.id === currImage.id)

    if (currIdx === 0) {
      return images[images.length - 1].id
    }
    return images[currIdx - 1].id
  }
  function getNextImageId(images, currImage) {
    let currIdx = images.findIndex(x => x.id === currImage.id)

    if (currIdx === images.length - 1) {
      return images[0].id
    }
    return images[currIdx + 1].id
  }

  const prevId = getPrevImageId(images, currImage)
  const nextId = getNextImageId(images, currImage)

  const updateWidth = () => {
    if (typeof window !== "undefined") {
      setPageHeight(window.innerHeight)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageHeight(window.innerHeight + "px")
      window.addEventListener("resize", updateWidth)
      return () => window.removeEventListener("resize", updateWidth)
    }
  }, [])

  return (
    <main className="image-page" style={{ height: pageHeight }}>
      <Seo title={title} />
      <Link to={pathname} className="close">
        <AiOutlineClose />
      </Link>
      <AiOutlineInfoCircle
        className="info"
        onClick={() => setShowInfo(!showInfo)}
      />
      <article className="image-container">
        <GatsbyImage
          image={pathToImage}
          alt={title}
          objectFit="contain"
          className="image"
        />
        <div className="nav-buttons">
          <Link
            to={`/photos/${prevId}`}
            state={{ images: images, id: prevId, pathname: pathname }}
            className="prev link"
          >
            <RiArrowLeftSLine />
          </Link>
          <Link
            to={`/photos/${nextId}`}
            state={{ images: images, id: nextId, pathname: pathname }}
            className="next link"
          >
            <RiArrowRightSLine />
          </Link>
        </div>
      </article>
      <div className={showInfo ? "show image-info" : "image-info"}>
        <AiOutlineClose
          className="close-info"
          onClick={() => setShowInfo(false)}
        />
        <h1 className="title">{title}</h1>
        <p className="description"></p>
        <div className="data">
          <div className="date">
            <label htmlFor="img-date">Date:</label>
            <span id="img-date">{date}</span>
          </div>
          <div className="location">
            <label htmlFor="img-location">Location:</label>
            <span id="img-location">{location}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export const query = graphql`
  query GetCurrentImage($image: String) {
    contentfulImage(id: { eq: $image }) {
      dateTaken
      locationTaken
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      id
    }
  }
`

export default ImageTemplate
