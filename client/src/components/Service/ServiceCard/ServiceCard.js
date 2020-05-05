import React from 'react';
import classes from './ServiceCard.module.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ titleIcon, title, img, listItems }) => {
  const list = listItems.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className={classes.ServiceCard}>
      <h2>
        <i className={titleIcon}></i>
        {title}
      </h2>
      <img src={img} alt='Obrazek' />
      <ul>{list}</ul>
      <Link to='/kontakt'>
        <button>
          <i className='fas fa-phone'></i> Skontaktuj się >
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
