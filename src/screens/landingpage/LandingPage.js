import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
import './LandingPageStyle.scss';
import ThirdSection from './ThirdSection/ThirdSection';
import Header from '../../components/Header';

const LandingPage = () => {
  const [headerVisible, setHeaderVisible] = useState(true)



  LandingPage.propTypes = {
    headerVisible: PropTypes.bool
  };
  const listenScrollEvent = () => {
    if (window.scrollY < 660) {
      setHeaderVisible(true)
    } else if (window.scrollY > 660) {
      setHeaderVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div>
      <Header headerVisible={headerVisible} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default LandingPage;
