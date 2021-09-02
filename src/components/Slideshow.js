import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

const Slideshow = () => {
  const data = useStaticQuery(graphql`
    {
      slideshow: allFile(
        filter: { relativeDirectory: { eq: "carousel" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            relativePath
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                transformOptions: { fit: COVER }
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)

  const nodes = data.slideshow.edges

  return (
    <Carousel className="carousel">
      {nodes.map(({ node }) => (
        <Carousel.Item key={node.id} className="carousel-item">
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
    // <Carousel>{data.slideshow.edges.map(({ node }) => ({ node }))}</Carousel>
  )
}

export default Slideshow
