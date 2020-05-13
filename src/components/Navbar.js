import React, { Component } from 'react';
import classes from '../App.module.css';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className={classes.navbar}>
        <div className={classes.navcenter}>
          <div className={classes.navheader}>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' />
            </Link>
            <button
              type='button'
              className={classes.navbtn}
              onClick={this.handleToggle}>
              <FaAlignRight className={classes.navicon} />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen
                ? [classes.navlinks, classes.shownav].join(' ')
                : classes.navlinks
            }>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
