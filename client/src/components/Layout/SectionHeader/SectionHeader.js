import React from 'react';
import classes from './SectionHeader.module.css';

const SectionHeader = ({ icon, text }) => {
  return (
    <div className={classes.SectionHeader}>
      <h1>
        {text} <i className={icon}></i>
      </h1>
    </div>
  );
};

export default SectionHeader;
