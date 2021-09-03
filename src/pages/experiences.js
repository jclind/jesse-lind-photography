import React from "react"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import Seo from "../components/SEO"
const collections = ({ data }) => {
  const experiences = data.allContentfulExperiences.nodes

  return (
    <Layout>
      <Seo title="Experiences" />
      <main className="page experiences-page">
        <Logo />
        <section className="experiences">
          {experiences.map((item, index) => {
            const { title, coverImage } = item
            const pathToImage = getImage(coverImage)
            const slug = slugify(title, { lower: true })
            return (
              <article className="experience" key={index}>
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className="experience-img"
                />
                <div className="experience-content">
                  <Link to={`/experiences/${slug}`} className="link">
                    <button className="experience-btn">{title}</button>
                  </Link>
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulExperiences {
      nodes {
        coverImage {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        title
      }
    }
  }
`

export default collections
