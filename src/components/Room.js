import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import classes from '../App.module.css';
import PropTypes from 'prop-types';

const Room = (props) => {
  const { name, slug, images, price } = props.room;
  return (
    <article className={classes.room}>
      <div className={classes.imgcontainer}>
        <img src={images[0] || defaultImg} alt='single room' />
        <div className={classes.pricetop}>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/rooms/${slug}`}
          className={[classes.btnprimary, classes.roomlink].join(' ')}>
          features
        </Link>
      </div>
      <p className={classes.roominfo}>{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
