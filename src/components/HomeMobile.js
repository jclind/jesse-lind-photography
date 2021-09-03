import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "./Logo"
import { navigate } from "gatsby"
const HomeMobile = () => {
  return (
    <div>
      <main className="page mobile-home-page">
        <Logo />
        <div className="mobile-hero">
          <StaticImage
            src="../assets/images/mobile-home-small.jpg"
            alt="Niagra Falls Ferri"
            layout="fullWidth"
            placeholder="blurred"
          />
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-title">Jesse Lind</div>
              <div className="hero-subtitle">Photography</div>
              <button className="btn" onClick={() => navigate("/portfolio")}>
                View Photos
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeMobile
