import React from "react"
import { navigate, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const error = () => {
  return (
    <Layout>
      <Seo title="error" />
      <main className="page error-page">
        <h1>404</h1>
        <h2>Page Not Found.</h2>
        <button onClick={() => navigate("/")}>Back Home</button>
        <p>
          If this problem persists, <Link to="/contact">Contact Me</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default error
