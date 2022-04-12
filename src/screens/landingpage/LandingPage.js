import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
import './LandingPageStyle.scss';
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
