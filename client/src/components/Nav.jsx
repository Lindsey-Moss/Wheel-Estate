import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../styles/images/wheel_estate_logo.png'

export default class Nav extends Component {
  render() {
    return (
      <nav className="topper">
        <NavLink to="/"><img src={logo} alt="logo" width="70" /></NavLink>
        <div className="navbar">
          <div>
            <NavLink to="/listings/all">Listings</NavLink>
            <NavLink to="/listing-new">New Listing</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}