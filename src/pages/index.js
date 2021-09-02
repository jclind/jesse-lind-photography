import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import HomeMobile from "../components/HomeMobile"
import HomeDesktop from "../components/HomeDesktop"
import SEO from "../components/SEO"
// import { graphql } from "gatsby"
// import useWindowDimensions from "../utils/useWindowDimensions"

export default function Home() {
  const [width, setWidth] = React.useState(0)

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
  })
  // const width = useWindowDimensions()
  return (
    <Layout>
      <SEO title="Home" />
      {width === 0 ? undefined : width >= 576 ? (
        <HomeDesktop />
      ) : (
        <HomeMobile />
      )}
    </Layout>
  )
}
