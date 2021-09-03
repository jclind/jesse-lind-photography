import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import HomeMobile from "../components/HomeMobile"
import HomeDesktop from "../components/HomeDesktop"
import Seo from "../components/Seo"

export default function Home() {
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
      window.addEventListener("resize", updateWidth)
      return () => window.removeEventListener("resize", updateWidth)
    }
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      {width === 0 ? undefined : width >= 576 ? (
        <HomeDesktop />
      ) : (
        <HomeMobile />
      )}
    </Layout>
  )
}
