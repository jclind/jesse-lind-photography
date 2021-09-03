import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

const Navbar = ({ show, setShow }) => {
  return (
    <nav className={show ? "navbar show-links" : "navbar"}>
      <div className="navbar-center">
        <div className="nav-header">
          <Link to="/" onClick={() => setShow(false)}>
            <Logo />
          </Link>
        </div>
        <div className="nav-links">
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            <h3>home</h3>
          </Link>
          <Link
            to="/portfolio/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            partiallyActive={true}
          >
            <h3>portfolio</h3>
          </Link>
          <Link
            to="/experiences"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            partiallyActive={true}
          >
            <h3>experiences</h3>
          </Link>
          <Link
            to="/all-photos"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            partiallyActive={true}
          >
            <h3>all photos</h3>
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            <h3>about</h3>
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            <h3>contact</h3>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
