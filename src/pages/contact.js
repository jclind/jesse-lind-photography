import React from "react"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import Seo from "../components/SEO"
const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <div className="contact-text-container">
            <h1>Get In Touch</h1>
            <p>Email - Jesselindphotography@gmail.com</p>
            <SocialLinks />
          </div>
          <div className="contact-form-container">
            <form
              action="https://formspree.io/f/mrgrzwar"
              method="post"
              id="contact-form"
            >
              <div className="name-fields">
                <div>
                  <label htmlFor="first-name">First Name *</label>
                  <input
                    type="name"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name *</label>
                  <input type="name" name="last-name" id="last-name" required />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  id="message"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default contact
