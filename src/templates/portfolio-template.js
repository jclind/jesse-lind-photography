import React from "react"
import { navigate, graphql } from "gatsby"
import Layout from "../components/Layout"
import ImageLayout from "../components/ImageLayout"
import { BsArrowLeft } from "react-icons/bs"
import Seo from "../components/Seo"

const PortfolioTemplate = ({ data, pageContext }) => {
  const nodes = data.allContentfulImage.nodes

  let images = []
  if (nodes) {
    images = nodes.map(node => {
      return { gatsbyImage: node.image, title: node.title, id: node.id }
    })
  }

  // pageTitle to uppercase
  const pageTitle =
    pageContext.portfolio.charAt(0).toUpperCase() +
    pageContext.portfolio.slice(1)

  return (
    <Layout>
      <Seo title={pageTitle} />
      <main className="page portfolio-page">
        <div className="title">
          <BsArrowLeft
            className="backarrow"
            onClick={() => navigate("/portfolio")}
          />
          <h1>{pageTitle}</h1>
        </div>
        <section className="portfolio-section">
          <ImageLayout images={images} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetImageByPortfolio($portfolio: String) {
    allContentfulImage(
      sort: { fields: title, order: ASC }
      filter: { portfolio: { eq: $portfolio } }
    ) {
      nodes {
        image {
          gatsbyImageData
        }
        title
        id
      }
    }
  }
`

export default PortfolioTemplate
