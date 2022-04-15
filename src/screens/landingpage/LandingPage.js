import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
import './LandingPageStyle.scss';
import ThirdSection from './ThirdSection/ThirdSection';
import Header from '../../components/Header';

const LandingPage =()=> {
  return (
<div  className="landingpage">
   <Header/>
   <FirstSection/>
   <SecondSection/>
   <ThirdSection/>
   </div>
  ); 
}

export default LandingPage;
