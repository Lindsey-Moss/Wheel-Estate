import React, { Component } from 'react';
import SpotCard from '../components/SpotCard';

export default class Listings extends Component {
  showSpot = (spot) => {
    this.props.history.push(`/listings/${spot.id}`)
  }
  render() {
    const spotListings = this.props.listings.map(spot => {
      return (
        <SpotCard 
          key={`${spot.id}${spot.name}`} 
          showSpot={this.showSpot} 
          spot={spot} 
        />
    )});

    return (
      <div className="listings">
        {spotListings}
      </div>
    );
  }
}