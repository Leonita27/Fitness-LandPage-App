import React from "react"
import "./TrainersStyle.scss"
import TrainersCard from "../../../components/TrainersCard"
import Trainer1 from "../../../assets/images/landpage/Trainer1.jpg"
import trainer2 from "../../../assets/images/landpage/trainer2.jpg"
import trainer3 from "../../../assets/images/landpage/trainer3.jpg"

import { useTranslation } from "react-i18next"

const Trainers = () => {
  const { t } = useTranslation()
  return (
    <div className="TrainersContainer">
      <div className="TrainersText">
        <p className="titleText">{t("LandingPage.Trainers.title")}</p>
        <h1 className="subtitleText">
          {t("LandingPage.Trainers.subTitle")}
          <span className="trainersTitle">
            {t("LandingPage.Trainers.secsubTitle")}
          </span>
        </h1>
        <p className="descriptionText">
          {t("LandingPage.Trainers.description")}
        </p>
      </div>

      <div className="secondTrainersContainer">
        <TrainersCard
          title={"Micah Greer"}
          subTitle={"Personal Trainer"}
          icon={Trainer1}
          description={
            "My health journey started in high school, through sports and education. In sports, I found myself constantly wanting to know why certain exercises were performed, and physiologically, the consequence of them. "
          }
        />
        <TrainersCard
          title={"Fiona Mccann"}
          subTitle={"Personal Trainer"}
          icon={trainer2}
          description={
            "I started in fitness about 11 years ago, when I attended my first gym class. I’d been a gym hater all my life but I found Kettlebells, TrX and a great atmosphere brought me to love exercise! "
          }
        />
        <TrainersCard
          title={"John Wu"}
          subTitle={"Personal Trainer"}
          icon={trainer3}
          description={
            "John is board certified in both the USA and China. He's lived and worked in both Beijing, China and the USA for over a decade."
          }
        />
      </div>
    </div>
  )
}

export default Trainers
