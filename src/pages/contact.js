import React from "react"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import SEO from "../components/SEO"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
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
                  <label>First Name *</label>
                  <input type="name" name="first-name" required />
                </div>
                <div>
                  <label>Last Name *</label>
                  <input type="name" name="last-name" required />
                </div>
              </div>
              <div>
                <label>Email *</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Subject *</label>
                <input type="text" name="subject" autoComplete="off" required />
              </div>
              <div>
                <label>Message *</label>
                <textarea name="message" rows="5" required></textarea>
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
