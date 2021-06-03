import React, { Component } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class BookingCard extends Component {

  deleteThis(bookingID) {
    let doublecheck = prompt(`Are you sure you want to delete this booking? 

To confirm deletion, please type " YES ".`)
    if (doublecheck === "YES") {
      axios.delete(`${BASE_URL}/bookings/delete/${bookingID}`)
      alert(`The booking has been successfully deleted.`)
      console.log(bookingID)
      window.location.reload()
    } else if (!doublecheck) {
    } else {
      alert(`An error occurred during deletion. Sorry about that!

The booking has not been deleted.

Please try again in a few moments.`)
    }
  }

  render() {
    const { spot } = this.props
    return (
      <div className="booking-card">
        <p><b>Listing: {spot.space_id}</b></p>
        <p><b>Agreed Cost:</b> ${spot.cost}</p>
        <p><b>Booked by:</b> {spot.parker_name},<br />{spot.parker_email}</p>
        <div className="booking-buttons">
          <button className="enhance" onClick={() => this.props.showSpot(spot)}>View Listing Detail</button>
          <button className="cancel" onClick={() => this.deleteThis(spot._id)}>Cancel</button>
        </div>
      </div >
    );
  }
}