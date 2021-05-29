import React, { Component } from 'react';
import TextInput from '../components/TextInput';


export default class ListingForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addListing(e)
    this.props.history.push('/listings')
  }

  render() {
    const newSpot = this.props.newSpot
    return (

      // see spotSchema in backend for info required
      
      <div>
        <h1>Add A New Parking Spot Listing</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <TextInput type="text" value={newSpot.name} onChange={this.props.handleChange} name={'name'} placeholder={'name'} />
          <TextInput type="text" value={newSpot.img} onChange={this.props.handleChange} name={'img'} placeholder={'image'} />
          <TextInput type="text-area" value={newSpot.description} onChange={this.props.handleChange} name={'description'} placeholder={'description'} />
          <TextInput type="text" value={newSpot.price} onChange={this.props.handleChange} name={'price'} placeholder={'price'} /> */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}