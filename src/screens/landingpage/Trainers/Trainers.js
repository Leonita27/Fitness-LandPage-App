import React from "react"
import "./TrainersStyle.scss"
import { useTranslation } from "react-i18next"

const Trainers = () => {
  const { t } = useTranslation()
  return (
    <div className="TrainersContainer">
      <div className="AboutUsText">
        <p className="titleText">{t("LandingPage.Trainers.title")}</p>
        <h1 className="subtitleText">{t("LandingPage.Trainers.subTitle")}
            <span className="trainersTitle">{t("LandingPage.Trainers.secsubTitle")}</span>
        </h1>
        <p className="descriptionText">{t("LandingPage.Trainers.description")}</p>
      </div>

      <div className="secondTrainersContainer">
      </div>
    </div>
  )
}

export default Trainers
