import React, { useState } from "react"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/css/main.css"
import Hamburger from "hamburger-react"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      {/* Background dim on navbar open */}
      <div
        onClick={() => setShow(false)}
        onKeyPress={() => setShow(false)}
        className={show ? "background-blur" : "d-none"}
        style={{ height: "100vh", width: "100%", maxWidth: "100%" }}
      ></div>
      <Navbar show={show} setShow={setShow} />
      <div style={{ height: "100vh", width: "100vw" }}>{children}</div>
      <div className="burger">
        <Hamburger rounded toggled={show} toggle={setShow} />
      </div>
    </div>
  )
}

export default Layout
