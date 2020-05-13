import React from 'react';
import classes from '../App.module.css';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className={classes.filtercontainer}>
      <Title title='search rooms' />
      <form className={classes.filterform}>
        {/* select type */}
        <div className={classes.formgroup}>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className={classes.formcontrol}
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className={classes.formgroup}>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className={classes.formcontrol}
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className={classes.formgroup}>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className={classes.formcontrol}
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className={classes.formgroup}>
          <label htmlFor='size'>room size</label>
          <div className={classes.sizeinputs}>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className={classes.sizeinput}
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className={classes.sizeinput}
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className={classes.formgroup}>
          <div className={classes.singleextra}>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className={classes.singleextra}>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
