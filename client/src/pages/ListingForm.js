import React, { Component } from 'react';
import FormInput from '../components/FormInput';


export default class ListingForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addListing(e)
    this.props.history.push('/listings')
  }

  render() {
    const newSpot = this.props.newSpot
    console.log(newSpot)
    return (
      <div className="page">
        <h1>List Your Parking Spot</h1>
        <form onSubmit={this.handleSubmit}>

            <FormInput type="text" value={newSpot.title} onChange={this.props.handleChange} name={'title'} placeholder={'Listing Title'} />

            <FormInput type="text" value={newSpot.owner_name} onChange={this.props.handleChange} name={'owner_name'} placeholder={`Owner's Name`} />

            <FormInput type="text" value={newSpot.price} onChange={this.props.handleChange} name={'price'} placeholder={'#'} />

            <FormInput type="text-area" value={newSpot.description} onChange={this.props.handleChange} name={'description'} placeholder={'Description'} />

            <FormInput type="text" value={newSpot.image} onChange={this.props.handleChange} name={'image'} placeholder={'URL'} />

            <FormInput type="text" value={newSpot.available_spots} onChange={this.props.handleChange} name={'available_spots'} placeholder={'#'} />

            <FormInput type="text" value={newSpot.size_length} onChange={this.props.handleChange} name={'size_length'} placeholder={'#'} />

            <FormInput type="text" value={newSpot.size_width} onChange={this.props.handleChange} name={'size_width'} placeholder={'#'} />

            <FormInput type="text" value={newSpot.utilities} onChange={this.props.handleChange} name={'utilities'} placeholder={'Electric, water, internet, none'} />

            <FormInput type="text" value={newSpot.privacy} onChange={this.props.handleChange} name={'privacy'} placeholder={'Are there neighbors around?'} />

            <FormInput type="text" value={newSpot.pets} onChange={this.props.handleChange} name={'pets'} placeholder={'Yes or No'} />

            <FormInput type="text" value={newSpot.location} onChange={this.props.handleChange} name={'location'} placeholder={'00000'} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}