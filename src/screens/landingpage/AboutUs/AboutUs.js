import React from "react"
import AboutUsCard from "../../../components/AboutUsCard"
import "./AboutUsStyle.scss"
import AboutUsDetail from "../../../assets/images/landpage/AboutUsDetails.png"
import { useTranslation } from "react-i18next"
import Exercise from "../../../assets/images/landpage/exercise.png"
import Diets from "../../../assets/images/landpage/diets.png"
import Products from "../../../assets/images/landpage/protein.png"
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
            subTitle={t("LandingPage.AboutUs.Cards.firstTopTitle")}
            title={t("LandingPage.AboutUs.Cards.firstTitle")}
            description={t("LandingPage.AboutUs.Cards.firstDescription")}
            icon={<img src={Products} width={"50%"} height={"50%"} alt="" />}
          />
          <AboutUsCard
            subTitle={t("LandingPage.AboutUs.Cards.secTopTitle")}
            title={t("LandingPage.AboutUs.Cards.secTitle")}
            description={t("LandingPage.AboutUs.Cards.secDescription")}
            icon={<img src={Diets} width={"50%"} height={"50%"} alt="" />}
          />
          <AboutUsCard
            subTitle={t("LandingPage.AboutUs.Cards.thirdTopTitle")}
            title={t("LandingPage.AboutUs.Cards.thirdTitle")}
            description={t("LandingPage.AboutUs.Cards.thirdDescription")}
            icon={<img src={Exercise} width={"50%"} height={"50%"} alt="" />}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
