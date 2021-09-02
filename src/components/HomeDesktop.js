import React from "react"
import Slideshow from "./Slideshow"

const HomeDesktop = () => {
  return (
    <div>
      <main className="page page-desktop">
        <section className="home-desktop-container">
          <h1>Jesse Lind</h1>
          <h4>Photography</h4>
          <div className="carousel-container home-carousel">
            <Slideshow />
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomeDesktop
