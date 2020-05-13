import React from 'react';
import Room from './Room';
import classes from '../App.module.css';

const RoomsList = (props) => {
  if (props.rooms.length === 0) {
    return (
      <div className={classes.emptysearch}>
        <h3>unfortunately no rooms matched your search criteria</h3>
      </div>
    );
  }
  return (
    <section className={classes.roomslist}>
      <div className={classes.roomslistcenter}>
        {props.rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
