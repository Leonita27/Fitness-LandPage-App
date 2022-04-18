import React from "react"
import "./HeaderStyle.scss"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { useTranslation } from "react-i18next"

const Header = ({ headerVisible }) => {
  const { t, i18n } = useTranslation()
  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={headerVisible ? "headerContainer" : "secHeaderContainer"}>
      <div className="middleContainer">
        <div className="logo">
          <h1 className="logoName">FITNESS</h1>
          <h1 className="logoDetail">FIVESTAR</h1>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <a href="/about">{t("LandingPage.Header.AboutUs")}</a>
            </li>
            <li>
              <a href="/classes">{t("LandingPage.Header.OurClasses")}</a>
            </li>
            <li>
              <a href="/gallery">{t("LandingPage.Header.Gallery")}</a>
            </li>
            <li>
              <a href="/trainers">{t("LandingPage.Header.Trainers")}</a>
            </li>
            <li>
              <a href="/team">{t("LandingPage.Header.Team")}</a>
            </li>
          </ul>
        </div>
        <div className="lastContainer">
          <div className="iconBox">
            <FaFacebookF color="white" size={20} />
          </div>
          <div className="iconBox">
            <AiOutlineTwitter color="white" size={20} />
          </div>
          <div className="iconBox">
            {i18n.language === "al" && (
              <button
                onClick={() => handleClick("en")}
                className="languageText"
              >
                EN
              </button>
            )}
            {i18n.language === "en" && (
              <button
                onClick={() => handleClick("al")}
                className="languageText"
              >
                AL
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
