import React from 'react';
import classes from './SkillDesc.module.css';

const SkillDesc = ({ desc }) => {
  return (
    <div className={classes.SkillDesc}>
      <h1>{desc}</h1>
    </div>
  );
};

export default SkillDesc;
