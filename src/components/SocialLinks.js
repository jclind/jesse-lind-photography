import React, { useRef } from "react"
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
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        href="https://twitter.com/jclind02"
        className="link twitter"
        data-tip="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/jesseclind/"
        className="link linkedin"
        data-tip="Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/jclind"
        className="link github"
        data-tip="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
      <div
        href=""
        role="button"
        className="link discord"
        data-tip="Copy Discord Code"
        onClick={copyText}
        onKeyPress={copyText}
        tabIndex={0}
      >
        <FaDiscord />
        <div className="status" ref={discordIcon}>
          <AiOutlineCheck />
          <span>Copied</span>
        </div>
      </div>
      <a
        href="https://www.buymeacoffee.com/jesseclind"
        className="link buymeacoffee"
        data-tip="BuyMeACoffee"
        target="_blank"
        rel="noopener noreferrer"
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
