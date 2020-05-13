import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
import classes from '../App.module.css';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adispisicing elit. MAgni, corporis!'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adispisicing elit. MAgni, corporis!'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adispisicing elit. MAgni, corporis!'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adispisicing elit. MAgni, corporis!'
      }
    ]
  };

  render() {
    return (
      <section className={classes.services}>
        <Title title='services' />
        <div className={classes.servicescenter}>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className={classes.service}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
