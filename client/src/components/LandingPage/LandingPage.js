import React from 'react';
import './LandingPage.css';
import Card from './Card/Card';
import ComputerSVG from '../../img/landing-img.svg';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='container'>
        <div className='LandingPageLeftSide'>
          <Card />
        </div>
        <div className='LandingPageRightSide'>
          <img src={ComputerSVG} alt='Computer' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
