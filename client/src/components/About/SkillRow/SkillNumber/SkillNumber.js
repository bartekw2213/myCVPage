import React from 'react';
import classes from './SkillNumber.module.css';

const SkillNumber = ({ number }) => {
  return <div className={classes.SkillNumber}>{number}</div>;
};

export default SkillNumber;
