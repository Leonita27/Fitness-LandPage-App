import React from "react"
import "./AboutUsCardStyle.scss"
const AboutUsCard = ({ subTitle, title, description, icon }) => {
  return (
    <div className="container">
      <div className="circleBox">{icon}</div>
      <p className="subTitle">{subTitle}</p>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default AboutUsCard
