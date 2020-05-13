import React from 'react';
import classes from '../App.module.css';

const Hero = (props) => {
  return <header className={classes[props.hero]}>{props.children}</header>;
};

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
