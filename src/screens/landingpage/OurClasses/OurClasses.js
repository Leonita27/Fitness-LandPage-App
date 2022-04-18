import React from "react"
import "./OurClassesStyle.scss"
import OurClasses1 from "../../../assets/images/landpage/OurClasses1.png"
import OurClasses2 from "../../../assets/images/landpage/OurClasses2.png"
import OurClasses3 from "../../../assets/images/landpage/OurClasses3.png"
import OurClasses4 from "../../../assets/images/landpage/OurClasses4.jpg"

const OurClasses = () => {
  return (
    <div className="OurClassContainer">
      <div className="fistContainer">
        <img src={OurClasses1} width={"70%"} alt="" />
      </div>
      <div className="secondContainer">
        <h1 className="OurClassesTitle">Our Classes</h1>
        <p className="OurClassesDescription">
        Fitness Classes are a great way to get started, make progress on your 
            goals or change up your routine. Our certified instructors make sure 
                you get motivated, learn proper form and have fun.
        </p>
        <div className="photosContainer">
          <div className="fistText">
            <img src={OurClasses2} width={"20%"} alt="" />
            <h1 className="headerText">
              Weight Gain
            </h1>
            <p className="paragraphText">
              Weight gain can be caused by different things, among them muscle gain. 
              Certain exercises that focus on building muscle will help you gain weight. 
            </p>
          </div>
        <div className="fistText">
          <img src={OurClasses3} width={"20%"} alt="" />  
          <h1 className="headerText">Weight Loss</h1>
          <p className="paragraphText">Losing weight is not easy, and it takes commitment. 
                But if you’re ready to get started, we’ve got a step-by-step guide to help get 
                you on the road to weight loss and better health.</p>
        </div>
        <div className="fistText">
          <img src={OurClasses4} width={"20%"} alt="" />
          <h1 className="headerText">Muscle Dfn</h1>
          <p className="paragraphText">If your goal is more-defined muscles, what will get you
               there is being smart about your goals, doing the right types of workouts, 
               eating right, and getting the rest your body needs.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurClasses
