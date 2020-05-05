import React from 'react';
import classes from './SkillRow.module.css';

const SkillRow = ({ children }) => {
  return <div className={classes.SkillRow}>{children}</div>;
};

export default SkillRow;
