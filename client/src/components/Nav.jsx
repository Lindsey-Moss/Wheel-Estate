import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../styles/images/wheel_estate_logo.png'

export default class Nav extends Component {
  render() {
    const user = this.props.user
    return (
      <nav className="topper">
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        <div className="navbar">
          <div>
            <NavLink to="/listings/all">Listings</NavLink>
            {user === "owner" ? ( // user: owner view only
              <span><NavLink to="/listing-new">New Listing</NavLink>
                <NavLink to="/bookings/all">Bookings</NavLink>
              </span>
            ) : ( // user: parker view only
              null
            )}
          </div>
        </div>
      </nav>
    );
  }
}