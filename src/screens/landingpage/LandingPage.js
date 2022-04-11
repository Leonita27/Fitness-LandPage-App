import FirstSection from './FirstSection/FirstSection';
import FirstSectionStyle from './FirstSection/FirstSectionStyle.css';
import SecondSection from './SecondSection/SecondSection';
import './LandingPageStyle.css';
import ThirdSection from './ThirdSection/ThirdSection';

const LandingPage =()=> {
  return (
<div  className="landingpage">
   <FirstSection/>
   <SecondSection/>
   <ThirdSection/>
   </div>
  ); 
}

export default LandingPage;
