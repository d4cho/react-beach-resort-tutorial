import React from 'react';
import classes from '../App.module.css';
import loadingGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className={classes.loading}>
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt='' />
    </div>
  );
};

export default Loading;
