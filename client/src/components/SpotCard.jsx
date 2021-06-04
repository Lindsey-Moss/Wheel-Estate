import React, { Component } from 'react';

export default class SpotCard extends Component {
  render() {
    const { spot } = this.props
    return (
      <div className="spot-card" onClick={() => this.props.showSpot(spot)}>
        <img style={{ display: 'block' }} src={spot.image} alt={spot.title} />
        <h4>{spot.title}</h4>
        <h6>{spot.location} <span className="price">${spot.price}</span></h6>
      </div>
    );
  }
}