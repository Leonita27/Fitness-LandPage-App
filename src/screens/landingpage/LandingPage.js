import FirstSection from './FirstSection/FirstSection';
import FirstSectionStyle from './FirstSection/FirstSectionStyle.css';
import SecondSection from './SecondSection/SecondSection';
import './LandingPageStyle.css';

const LandingPage =()=> {
  return (
<div  className="landingpage">
   <FirstSection/>
   <SecondSection/>
   
   </div>
  ); 
}

export default LandingPage;
