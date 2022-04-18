import React from "react"
import AboutUsCard from "../../../components/AboutUsCard"
import "./AboutUsStyle.scss"
import AboutUsDetail from "../../../assets/images/landpage/AboutUsDetails.png"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsText">
        <p className="titleText">{t("LandingPage.AboutUs.title")}</p>
        <h1 className="subtitleText">{t("LandingPage.AboutUs.subTitle")}</h1>
        <h1 className="boldSubtitleText">
          {t("LandingPage.AboutUs.subTitleDetails")}
        </h1>
        <p className="descriptionText">
          {t("LandingPage.AboutUs.description")}
        </p>
      </div>

      <div className="middleAboutContainer">
        <div className="aboutImage">
          <img src={AboutUsDetail} width={"100%"} alt="" />
        </div>
        <div className="cardsContainer">
          <AboutUsCard
            subTitle={"Etiem Diam"}
            title={"Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam dignissim rhoncus, faucibus vestibulum semper eget pretium purus."
            }
          />
          <AboutUsCard
            subTitle={"Etiem Diam"}
            title={"Diets"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam dignissim rhoncus, faucibus vestibulum semper eget pretium purus."
            }
          />
          <AboutUsCard
            subTitle={"Etiem Diam"}
            title={"Exercise"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam dignissim rhoncus, faucibus vestibulum semper eget pretium purus."
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
