import React from "react"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import { graphql } from "gatsby"
import ImageLayout from "../components/ImageLayout"
import Seo from "../components/Seo"
const allPhotos = ({ data }) => {
  const images = data.allContentfulImage.nodes.map(node => {
    return { gatsbyImage: node.image, title: node.title, id: node.id }
  })

  return (
    <Layout>
      <Seo title="All Photos" />
      <main className="page">
        <Logo />
        <section className="all-photos">
          <ImageLayout images={images} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetAllPhotos {
    allContentfulImage {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        title
        id
      }
    }
  }
`

export default allPhotos
