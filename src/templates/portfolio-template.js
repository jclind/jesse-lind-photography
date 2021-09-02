import React from "react"
import { navigate, graphql } from "gatsby"
import Layout from "../components/Layout"
import ImageLayout from "../components/ImageLayout"
import { BsArrowLeft } from "react-icons/bs"
import SEO from "../components/SEO"
const PortfolioTemplate = ({ data, pageContext }) => {
  const nodes = data.allContentfulImage.nodes
  const pageTitle = pageContext.portfolio
  let images = []
  if (nodes) {
    images = nodes.map(node => {
      return { gatsbyImage: node.image, title: node.title, id: node.id }
    })
  }

  return (
    <Layout>
      <SEO title={pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} />
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
