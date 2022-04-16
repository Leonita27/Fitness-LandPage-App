import React from "react"
import "./OverviewStyle.scss"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import Carousel from "nuka-carousel"
import firstPhoto from "../../../assets/images/landpage/firstPhoto.png"
import secondPhoto from "../../../assets/images/landpage/secondPhoto.jpeg"
import thirdPhoto from "../../../assets/images/landpage/thirdPhoto.jpeg"

const Overview = () => {
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
          <img src={firstPhoto} className="imageStyle" width={"100%"} />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">START TODAY</h1>
            <h1 className="textSlide">FIGHT FOR THE BODY YOU DESERVE</h1>
          </div>
          <img src={firstPhoto} className="imageStyle" width={"100%"} />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">BE A FIT STAR</h1>
            <h1 className="textSlide">
              IF IT DOESNT CHALLENGE YOU, IT DOESNT CHANGE YOU
            </h1>
          </div>
          <img src={secondPhoto} className="imageStyle" width={"100%"} />
        </div>
        <div className="slidePhoto">
          <img src={thirdPhoto} className="imageStyle" width={"100%"} />
        </div>
        <div className="slidePhoto">
          <div className="fullText">
            <h1 className="startText">BREAK YOUR LIMITS</h1>
            <h1 className="textSlide">
              FIT IS NOT A DESTINATION, ITS A WAY OF LIFE
            </h1>
          </div>
          <img src={thirdPhoto} className="imageStyle" width={"100%"} />
        </div>
      </Carousel>
    </div>
  )
}

export default Overview
