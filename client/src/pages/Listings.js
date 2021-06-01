import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"
import SpotCard from '../components/SpotCard';

export default class Listings extends Component {
  showSpot = (spot) => {
    this.props.history.push(`/listings/${spot.id}`)
  }
  render() {
    const spotListings = this.props.listings.map(spot => {
      return (
        <SpotCard 
          key={`${spot._id}`} 
          showSpot={this.showSpot} 
          spot={spot} 
        />
    )});

    return (
      <div className="page">
        <h1>HERE THERE BE LISTINGS</h1>
        <div className="listings">
          {spotListings}
        </div>
      </div>
    );
  }
}