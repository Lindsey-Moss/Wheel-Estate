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

  goBack() {
    window.history.back();
  }

  deleteThis() {
    let ID = (window.location.pathname).replace('/listings/','')
    let doublecheck = prompt(`Are you sure you want to delete this listing? 

To confirm deletion, please type " YES ".`)
    if (doublecheck === "YES") {
      axios.delete(`${BASE_URL}/listings/delete/${ID}`)
      alert(`The listing has been successfully deleted. You will now be redirected.`)
      window.history.back()
      window.location.reload()
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
          <button 
            className="back-to-listings"
            onClick={this.goBack}
            style={{padding:'6px', fontSize: '0.7em'}}
            >
              Return to Listings
          </button>
        </div>
        <div class="fit">
          <h2>{spot.title}</h2>
        </div>
        <div className="details-left">
          <div className="spot-zoom">
            <div className="spot-about">
            <h4>Located in: {spot.location} <span className="price">Price: ${spot.price}</span></h4>
          </div>
            <img src={spot.image} alt={spot.title} />
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
              <Link to="/listings/update/:_id"><button className="listing-button">Edit Listing</button></Link>
              <button 
                className="listing-button" 
                style={{backgroundColor:'maroon',color:'#ddd',fontFamily:'Century Gothic Bold Italic',letterSpacing:'0.02em'}}
                onClick={this.deleteThis}
              >
                Delete Listing
              </button>
            </div>
          ) : (
            <Link to={`/booking-new/${this.state.spot._id}`}><button className="listing-button">Book This Space</button></Link>
          )}
      </div>
    ) : null;
  }
}

