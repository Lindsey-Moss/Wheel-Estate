import React, { Component } from 'react';
import BookingCard from '../components/BookingCard';

export default class Bookings extends Component {
  showSpot = (spot) => {
    this.props.history.push(`/listings/${spot.space_id}`)
  }
  render() {
    const currentBookings = this.props.bookings.map(spot => {
      return (
        <BookingCard 
          key={`${spot._id}`} 
          showSpot={this.showSpot} 
          spot={spot} 
        />
    )});

    return (
      <div className="page">
        <div className="listings">
          {currentBookings}
        </div>
      </div>
    );
  }
}