import React from 'react';
import classes from './SkillImg.module.css';

const SkillImg = ({ img }) => {
  return (
    <div className={classes.SkillImg}>
      <img src={img} alt='Logo' />
    </div>
  );
};

export default SkillImg;
