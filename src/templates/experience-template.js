import React from "react"
import { navigate, graphql } from "gatsby"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import ImageLayout from "../components/ImageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsArrowLeft } from "react-icons/bs"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import SEO from "../components/SEO"
const ExperiencesTemplate = ({ data }) => {
  const node = data.contentfulExperiences
  const experienceTitle = node.title
  const { contentImages, coverImage } = node
  const pathToCoverImage = getImage(coverImage)
  const description = node.description
    ? documentToHtmlString(JSON.parse(node.description.raw))
    : ""
  let images = []
  if (contentImages) {
    images = contentImages.map(item => {
      return { gatsbyImage: item.image, title: item.title, id: item.id }
    })
  }

  console.log(images)
  return (
    <Layout>
      <SEO
        title={
          experienceTitle.charAt(0).toUpperCase() + experienceTitle.slice(1)
        }
      />
      <main className="page experience-page">
        <Logo />
        <div className="info">
          <div className="title">
            <BsArrowLeft
              className="backarrow"
              onClick={() => navigate("/experiences")}
            />
            <h1> {experienceTitle}</h1>
          </div>
          <GatsbyImage
            image={pathToCoverImage}
            alt={experienceTitle}
            className="image"
          />
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="divider"></div>
        </div>
        <section className="experience-section">
          <ImageLayout images={images} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetImageByExperience($experience: String) {
    contentfulExperiences(title: { eq: $experience }) {
      coverImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        description
      }
      contentImages {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        title
        id
      }
      description {
        raw
      }
      title
    }
  }
`

export default ExperiencesTemplate
