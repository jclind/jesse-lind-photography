import React from "react"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import { Link, graphql } from "gatsby"
import setupPortfolios from "../utils/setupPortfolios"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import Seo from "../components/Seo"

const portfolio = ({ data }) => {
  const images = data.allContentfulImage.nodes
  const newPortfolios = setupPortfolios(images)

  const genreNames = []

  return (
    <Layout>
      <Seo title="Portfolio" />
      <main className="page">
        <Logo />
        <section className="portfolios">
          {newPortfolios.map((item, index) => {
            const name = item[0].toLowerCase()
            if (genreNames.findIndex(genreName => genreName === name) !== -1) {
              return
            }
            const image = item[1]
            const slug = slugify(name, { lower: true })
            genreNames.push(name)
            return (
              <div className="portfolio" key={index}>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={name}
                  className="portofolio-img"
                />
                <Link
                  to={`/portfolio/${slug}`}
                  className="portfolio-title-container"
                >
                  <h1 className="portfolio-title">{name}</h1>
                </Link>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulImage(sort: { fields: image___createdAt, order: ASC }) {
      nodes {
        id
        portfolio
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default portfolio
