import React from "react"
import "./TrainersCardStyle.scss"
const TrainersCard = ({ subTitle, title, description, icon }) => {
  return (
    <div className="fullcontainer">
      <div className="upperContainer">
        <h1 className="firsttitle">{title}</h1>
        <p className="firstsubTitle">{subTitle}</p>
      </div>
      <img className="firstcircleBox" src={icon} alt=""></img>
      <div className="bottomContainer">
        <p className="firstdescription">{description}</p>
      </div>
    </div>
  )
}

export default TrainersCard
