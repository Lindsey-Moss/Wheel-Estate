import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <h4>Wheel Estate</h4>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/listings">Listings</NavLink>
          <NavLink to="/new">New Listing</NavLink>
        </div>
      </nav>
    );
  }
}