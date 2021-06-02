import React, { Component } from 'react';

export default class SpotCard extends Component {
  render() {
    const { spot } = this.props
    return (
      <div className="spot-card" onClick={() => this.props.showSpot(spot)}>
        <img style={{ display: 'block' }} src={spot.image} alt={spot.title} />
        <div className="banner"><h4>{spot.title} <span className="price">${spot.price}</span></h4></div>
        <h6>{spot.location}</h6>
      </div>
    );
  }
}