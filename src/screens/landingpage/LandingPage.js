import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import AboutUs from "./AboutUs/AboutUs"
import "./LandingPageStyle.scss"
import OurClasses from "./OurClasses/OurClasses"
import Header from "../../components/Header"
import Overview from "./Overview/Overview"

const LandingPage = () => {
  const [headerVisible, setHeaderVisible] = useState(true)

  LandingPage.propTypes = {
    headerVisible: PropTypes.bool,
  }
  const listenScrollEvent = () => {
    if (window.scrollY < 650) {
      setHeaderVisible(true)
    } else if (window.scrollY > 660) {
      setHeaderVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <div>
      <Header headerVisible={headerVisible} />
      <Overview />
      <AboutUs />
      <OurClasses />
    </div>
  )
}

export default LandingPage
