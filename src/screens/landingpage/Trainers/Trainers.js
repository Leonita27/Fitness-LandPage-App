import React from "react"
import "./TrainersStyle.scss"
import TrainersCard from "../../../components/TrainersCard"
import Carousel from "nuka-carousel"
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
        <Carousel
          wrapAround={true}
          slidesToShow={3}
          autoplay={true}
          autoplayInterval={2000}
          cellAlign={"center"}
          adaptiveHeight={true}
          animation={"zoom"}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          style={{ height: "440px", marginLeft: "60px" }}
        >
          <TrainersCard
            title={t("LandingPage.Trainers.firstName")}
            subTitle={t("LandingPage.Trainers.firstSubtitle")}
            icon={Trainer1}
            description={t("LandingPage.Trainers.firstDescription")}
          />
          <TrainersCard
            title={t("LandingPage.Trainers.secondName")}
            subTitle={t("LandingPage.Trainers.secondSubtitle")}
            icon={trainer2}
            description={t("LandingPage.Trainers.secondDescription")}
          />
          <TrainersCard
            title={t("LandingPage.Trainers.thirdName")}
            subTitle={t("LandingPage.Trainers.thirdSubtitle")}
            icon={trainer3}
            description={t("LandingPage.Trainers.thirdDescription")}
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Trainers
