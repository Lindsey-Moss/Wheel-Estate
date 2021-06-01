import React, { Component } from 'react';

export default class SpotCard extends Component {
  render() {
    const { spot } = this.props
    return (
      <div className="spot-card" onClick={() => this.props.showSpot(spot)}>
        <img style={{ display: 'block' }} src={spot.image} width="500" alt={spot.title} />
        <div className="banner"><h3>{spot.title} <span className="price">${spot.price}</span></h3></div>
        <h5>{spot.location}</h5>
      </div>
    );
  }
}