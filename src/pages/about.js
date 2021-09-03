import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai"
import Logo from "../components/Logo"

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <Logo />
        <section className="about-page">
          <StaticImage
            src="../assets/images/about-me.jpg"
            alt="About Me"
            className="about-header-img"
          />
          <h1 className="about-header">About Me</h1>
          <p>
            On January 2nd 2015 I picked up a dlsr camera that was handed down
            to me from my siblings which, up to that point, I had never actually
            taken a picture with. With the first picture I took, I began to feel
            an incredible passion for this new found hobby. With this first
            picture I started a two and a half year journey to take a photo
            every single day on the website{" "}
            <a href="https://tookapic.com/ryak2002">tookapic</a>.
          </p>
          <p>
            Throughout my tookapic journey, I was surrounded by an incredible
            community of like minded ameature photographers who pushed me to be
            the best photographer I could be. Throughout my 777 concecutive days
            of photos, I learned more about photography than I could have ever
            imagined. I learned about composition, lighting, surroundings, photo
            editing, and how to take an all around good photo. I also
            experimented with many different photography styles including
            studio, landscape, animals, and astronomy. And, although I have
            moved past my daily photography challenge, I will always make time
            to enjoy this incredible hobby.
          </p>
          <p>
            Photography will always be special to me because it changes the way
            you look at the world. Although it's true that photos of incredible
            landscapes or huge events are amazing and a big part of photography,
            I find that in most scenarios and in normal daily life, photography
            guides you to see the beautiy in the normal, everyday events, items,
            and people around you. And, in the end, daily beauty is what should
            hold the most joy and meaning in peoples lives.
          </p>
          <div className="divider"></div>
        </section>
        <section className="about-contact">
          <p>
            Thank you for taking the time to visit my site and view my work. I'd
            love to get in contact with you, so feel free to send an message or
            inquery any time!{" "}
          </p>
          <button
            class="about-page-contact-btn about-page-contact-btn-border"
            id="about-page-contact-btn"
            onClick={() => navigate("/contact")}
          >
            <span class="">Contact Me</span>
          </button>
          <div className="about-links">
            <a
              href="https://www.instagram.com/jclind02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram className="instagram" />
            </a>
            <a
              href="https://github.com/jclind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/jesseclind/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="linkedin" />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default about
