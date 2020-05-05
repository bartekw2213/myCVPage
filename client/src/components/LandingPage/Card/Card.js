import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  return (
    <div className='Card'>
      <div className='CardTitleForTablet'>
        <div className='CardTitle'>
          <i className='fas fa-signal fa-6x'></i>
          <div className='CardTitleHeaders'>
            <h1>PRZEJDŹ</h1>
            <h1>DO BYCIA</h1>
            <h1>ON-LINE</h1>
          </div>
        </div>
        <Link to='/o-mnie'>
          <button>Dowiedz się więcej ></button>
        </Link>
      </div>

      <div className='CardTitle DisableForTablet'>
        <i className='fas fa-signal'></i>
        <div className='CardTitleHeaders'>
          <h1>PRZEJDŹ</h1>
          <h1>DO BYCIA</h1>
          <h1>ON-LINE</h1>
        </div>
      </div>
      <div>
        <ul>
          <li>
            wypromuj swój biznes <i className='fas fa-chart-bar'></i>
          </li>
          <li>
            zdobądź nowych klientów <i className='fas fa-users'></i>
          </li>
          <li>
            stań się widoczny w sieci <i className='fas fa-wifi'></i>
          </li>
          <li>
            stwórz swoją wizytówkę <i className='far fa-id-card'></i>
          </li>
          <li>
            zbuduj wizerunek firmy <i className='far fa-building'></i>
          </li>
        </ul>
      </div>
      <Link to='/o-mnie' className='DisableForTablet'>
        <button>Dowiedz się więcej ></button>
      </Link>
    </div>
  );
};

export default Card;
