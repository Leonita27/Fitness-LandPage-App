import React from "react"
import "./OurClassesStyle.scss"
import OurClasses1 from "../../../assets/images/landpage/OurClasses1.png"
import OurClasses2 from "../../../assets/images/landpage/OurClasses2.png"
import OurClasses3 from "../../../assets/images/landpage/OurClasses3.png"
import OurClasses4 from "../../../assets/images/landpage/OurClasses4.jpg"
import { useTranslation } from "react-i18next"

const OurClasses = () => {
  const { t } = useTranslation()
  return (
    <div className="OurClassContainer">
      <div className="fistContainer">
        <img src={OurClasses1} width={"70%"} alt="" />
      </div>
      <div className="secondContainer">
        <h1 className="OurClassesTitle">{t("LandingPage.OurClasses.title")}</h1>
        <p className="OurClassesDescription">
          {t("LandingPage.OurClasses.subTitle")}
        </p>
        <div className="photosContainer">
          <div className="fistText">
            <img src={OurClasses2} width={"20%"} alt="" />
            <h1 className="headerText">
              {t("LandingPage.OurClasses.firstSubtitle")}
            </h1>
            <p className="paragraphText">
              {t("LandingPage.OurClasses.firstDescription")}
            </p>
          </div>
          <div className="fistText">
            <img src={OurClasses3} width={"20%"} alt="" />
            <h1 className="headerText">
              {t("LandingPage.OurClasses.secondSubtitle")}
            </h1>
            <p className="paragraphText">
              {t("LandingPage.OurClasses.secondDescription")}
            </p>
          </div>
          <div className="fistText">
            <img src={OurClasses4} width={"20%"} alt="" />
            <h1 className="headerText">
              {t("LandingPage.OurClasses.thirdSubtitle")}
            </h1>
            <p className="paragraphText">
              {t("LandingPage.OurClasses.thirdDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClasses
