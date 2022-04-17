import React from "react"
import AboutUsCard from "../../../components/AboutUsCard"
import "./AboutUsStyle.scss"
import AboutUsDetail from "../../../assets/images/landpage/AboutUsDetails.png"

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsText">
        <p className="titleText">ABOUT US</p>
        <h1 className="subtitleText">Who Help You</h1>
        <h1 className="boldSubtitleText"> To Be Fit</h1>
        <p className="descriptionText">
          We are a passion driven fitness chain, offering trendy
          products,diets,exercises and friendly environment because we believe
          to make people move every detail matters.
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
