import React, { useState, useEffect, useRef } from "react"
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"
import { FaDiscord } from "react-icons/fa"
import { SiBuymeacoffee } from "react-icons/si"
import { AiOutlineCheck } from "react-icons/ai"

import ReactTooltip from "react-tooltip"

const SocialLinks = () => {
  const discordTag = "Thinrin#4693"
  const discordIcon = useRef()

  function copyText(e) {
    navigator.clipboard.writeText(discordTag)
    discordIcon.current.classList.add("show")
    setTimeout(() => {
      discordIcon.current.classList.remove("show")
    }, 3000)
  }

  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/jclind02/"
        className="link instagram"
        data-tip="Instagram"
      >
        <FiInstagram />
      </a>
      <a
        href="https://twitter.com/jclind02"
        className="link twitter"
        data-tip="Twitter"
      >
        <FiTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/jesseclind/"
        className="link linkedin"
        data-tip="Linkedin"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/jclind"
        className="link github"
        data-tip="Github"
      >
        <FiGithub />
      </a>
      <a
        className="link discord"
        data-tip="Copy Discord Code"
        onClick={copyText}
      >
        <FaDiscord />
        <div className="status" ref={discordIcon}>
          <AiOutlineCheck />
          <span>Copied</span>
        </div>
      </a>
      <a
        href="https://www.buymeacoffee.com/jesseclind"
        className="link buymeacoffee"
        data-tip="BuyMeACoffee"
      >
        <SiBuymeacoffee />
      </a>
      <ReactTooltip
        backgroundColor="rgba(0, 0, 0, 0.5)"
        arrowColor="rgba(0, 0, 0, 0.5)"
        border="false"
        className="dark-tooltip"
      />
    </div>
  )
}

export default SocialLinks
