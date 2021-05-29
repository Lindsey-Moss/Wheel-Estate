import React, { Component } from 'react';

export default class SpotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spot: null
    }
  }

  componentDidMount() {
    let selectedSpot = this.props.listings.find((spot) => spot.id === parseInt(this.props.match.params.id))
    this.setState({ spot: selectedSpot })
  }

  render() {

// will need to be able to edit or delete (for owner state)
// will need to be able to book (for parker state)

// see spotSchema for info available for display

    const { spot } = this.state
    return spot ? (
      <div>
        <div>
          <img src={spot.img} alt={spot.name} />
          <div>
            <h1>{spot.name}</h1>
          </div>
        </div>
        <div>
          <div>
            <h3>Price: ${spot.price}</h3>
            <h3>Listing ID: {spot.id}</h3>
          </div>
          <p>{spot.description}</p>
        </div>
      </div>
    ) : null;
  }
}

