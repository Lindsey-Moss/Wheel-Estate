import React, { Component } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom';


export default class SpotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spot: props.listings.find((spot) => spot._id === props.match.params._id)
    }
  }

  deleteThis() {
    let ID = (window.location.pathname).replace('/listings/','')
    let doublecheck = prompt(`Are you sure you want to delete this listing? 

To confirm deletion, please type " YES ".`)
    if (doublecheck === "YES") {
      axios.delete(`${BASE_URL}/listings/delete/${ID}`)
      alert(`The listing has been successfully deleted. You will now be redirected.`)
      window.history.back()
      // window.location.reload()
      //// Reload will be implemented once the app has graduated
      //// from needing the landing, false sign-in page.
    } else if (!doublecheck) {
    } else {
      alert(`An error occurred during deletion. Sorry about that!

The listing has not been deleted.

Please try again in a few moments.`)
    }
  }

  render() {
    const { spot } = this.state
    return spot ? (
      <div className="page-short">
        <div className="fit">
          <Link to="/listings/all"><button 
            className="back-to-listings"
            style={{padding:'6px', fontSize: '0.7em'}}
            >
              Return to Listings
          </button></Link>
        </div>
        <div class="fit">
          <h2>{spot.title}</h2>
        </div>
        <div className="details-left">
          <div className="spot-zoom">
            <div className="spot-about">
            <h4>Located in: {spot.location} <span className="details-price">${spot.price}</span></h4>
            <img src={spot.image} alt={spot.title} />
          </div>
          </div>
        </div>
        <div className="details-right">
          <p className="description">{spot.description}</p>
          <div className="spot-enhance">
            <div><h6>Available Spaces:</h6>
              {spot.available_spots}</div>
            <div><h6>Privacy Details:</h6>
              {spot.privacy}</div>
            <div><h6>Size of the Spot:</h6>
              {spot.size_length}' x {spot.size_width}'</div>
            <div><h6>Utilities Present:</h6>
              {spot.utilities}</div>
            <div><h6>Pets Allowed?:</h6>
              {spot.pets}</div>
          </div>
        </div>
          {this.props.user === "owner" ? (
            <div className="owner-buttons">
              <Link to={`/listing-update/${this.state.spot._id}`}>
                <button className="listing-button">
                  Edit Listing
                </button>
              </Link>
              <button 
                className="listing-del-button" 
                onClick={this.deleteThis}>
                  Delete Listing
              </button>
            </div>
          ) : (
            <Link to={`/booking-new/${this.state.spot._id}`}>
              <button 
                className="listing-book-button"
                style={{marginTop:'10px'}}>
                Book This Space
              </button>
            </Link>
          )}
      </div>
    ) : null;
  }
}

