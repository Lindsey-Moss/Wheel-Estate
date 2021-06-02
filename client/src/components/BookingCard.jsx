import React, { Component } from 'react';

export default class BookingCard extends Component {
  render() {
    const { spot } = this.props
    return (
      <div className="booking-card">
        <p><b>Listing: {spot.space_id}</b></p>
        <p><b>Agreed Cost:</b> ${spot.cost}</p>
        <p><b>Booked by:</b> {spot.parker_name},<br />{spot.parker_email}</p>
        <button onClick={() => this.props.showSpot(spot)}>View Listing Detail</button>
      </div>
    );
  }
}