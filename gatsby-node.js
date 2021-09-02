const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Portfolio Pages
  const portfolioQuery = await graphql(`
    query GetPortfolios {
      allContentfulImage {
        nodes {
          portfolio
        }
      }
    }
  `)

  portfolioQuery.data.allContentfulImage.nodes.forEach(image => {
    const item = image.portfolio
    const slug = slugify(item, { lower: true })
    if (item) {
      createPage({
        path: `/portfolio/${slug}`,
        component: path.resolve(`src/templates/portfolio-template.js`),
        context: {
          portfolio: item,
        },
      })
    }
  })

  // Experiences Pages
  const experiencesQuery = await graphql(`
    query MyQuery {
      allContentfulExperiences {
        nodes {
          title
        }
      }
    }
  `)

  experiencesQuery.data.allContentfulExperiences.nodes.forEach(experience => {
    const title = experience.title
    const slug = slugify(title, { lower: true })
    if (title) {
      createPage({
        path: `/experiences/${slug}`,
        component: path.resolve("src/templates/experience-template.js"),
        context: {
          experience: title,
        },
      })
    }
  })

  // Image Pages
  const imagePageQuery = await graphql(`
    query GetImages {
      allContentfulImage(sort: { fields: image___createdAt, order: ASC }) {
        nodes {
          id
          title
        }
      }
    }
  `)

  imagePageQuery.data.allContentfulImage.nodes.forEach(item => {
    const id = item.id
    if (id) {
      createPage({
        path: `/photos/${id}`,
        component: path.resolve("src/templates/image-template.js"),
        context: {
          image: id,
        },
      })
    }
  })
}
