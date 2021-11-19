import React from "react"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer>
      <div>
        <span className="copyright">
          &#169; {new Date().getFullYear()} Jesse Lind || Built with{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </span>
        {/* <span className="liscense">
          All photos owned by Jesse Lind, <Link to="/contact">contact me</Link>{" "}
          for photo usage and pricing.
        </span> */}
      </div>
    </footer>
  )
}

export default Footer
