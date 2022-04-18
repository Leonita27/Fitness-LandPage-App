import React from "react"
import "./OverviewStyle.scss"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import Carousel from "nuka-carousel"
import firstPhoto from "../../../assets/images/landpage/firstPhoto.png"
import secondPhoto from "../../../assets/images/landpage/secondPhoto.jpeg"
import thirdPhoto from "../../../assets/images/landpage/thirdPhoto.jpeg"
import { useTranslation } from "react-i18next"

const Overview = () => {
  const { t } = useTranslation()
  return (
    <div className="FirstSection">
      <Carousel
        renderBottomCenterControls={false}
        animation="fade"
        cellAlign="center"
        wrapAround={true}
        renderCenterRightControls={({ nextSlide }) => (
          <div className="buttonStyle" onClick={nextSlide}>
            <IoIosArrowDropright size={30} color="white" />
          </div>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className="buttonStyle" onClick={previousSlide}>
            <IoIosArrowDropleft size={30} color="white" />
          </div>
        )}
      >
        <div className="slidePhoto">
          <img src={firstPhoto} className="imageStyle" width={"100%"} alt="" />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">
              {t("LandingPage.Overview.FirstSlide.title")}
            </h1>
            <h1 className="textSlide">
              {t("LandingPage.Overview.FirstSlide.description")}
            </h1>
          </div>
          <img src={firstPhoto} className="imageStyle" width={"100%"} alt="" />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">
              {t("LandingPage.Overview.SecondSlide.title")}
            </h1>
            <h1 className="textSlide">
              {t("LandingPage.Overview.SecondSlide.description")}
            </h1>
          </div>
          <img src={secondPhoto} className="imageStyle" width={"100%"} alt="" />
        </div>
        <div className="slidePhoto">
          <img src={thirdPhoto} className="imageStyle" width={"100%"} alt="" />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">
              {t("LandingPage.Overview.ThirdSlide.title")}
            </h1>
            <h1 className="textSlide">
              {t("LandingPage.Overview.ThirdSlide.description")}
            </h1>
          </div>
          <img src={thirdPhoto} className="imageStyle" width={"100%"} alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Overview
