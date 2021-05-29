import React, { Component } from 'react';

export default class SpotCard extends Component {
  render() {
    const { spot } = this.props
    return (
      <div className="spot-card" onClick={() => this.props.showSpot(spot)}>
        <img style={{ display: 'block' }} src={spot.img} alt={spot.name} />
        <h3>{spot.name}</h3>
      </div>
    );
  }
}