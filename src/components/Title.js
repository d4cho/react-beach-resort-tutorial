import React from 'react';
import classes from '../App.module.css';

const Title = (props) => {
  return (
    <div className={classes.sectiontitle}>
      <h4>{props.title}</h4>
      <div></div>
    </div>
  );
};

export default Title;
