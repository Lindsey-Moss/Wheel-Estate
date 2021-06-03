import React, { Component } from 'react';
import FormInput from '../components/FormInput';


export default class ListingForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addListing(e)
  }

  render() {
    const newSpot = this.props.newSpot
    return (
      <div className="page">
        <h1>List Your Parking Spot</h1>
        <form onSubmit={this.handleSubmit} className="new-listing-form">
          <label for="title" className="longlabel"><h5>Listing Title:</h5>
            <FormInput 
              type="text" 
              value={newSpot.title} 
              onChange={this.props.handleChange} 
              name={'title'} 
              placeholder={'Listing Title'} 
              className="long" />
          </label>
          <label for="image"><h5>Photo URL:</h5>
            <FormInput 
              type="text" 
              value={newSpot.image} 
              onChange={this.props.handleChange} 
              name={'image'} 
              placeholder={'URL'} />
            </label>
          <label for="price" className="shortlabel"><h5>Listing Price:</h5>
            <FormInput 
              type="text" 
              value={newSpot.price} 
              onChange={this.props.handleChange} 
              name={'price'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="available_spots" className="shortlabel"><h5>Spaces Available:</h5>
            <FormInput 
              type="text" 
              value={newSpot.available_spots} 
              onChange={this.props.handleChange} 
              name={'available_spots'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="location" className="shortlabel"><h5>Zip Code:</h5>
            <FormInput 
              type="text" 
              value={newSpot.location} 
              onChange={this.props.handleChange} 
              name={'location'} 
              placeholder={'00000'} 
              className="short"/>
          </label>
          <label for="owner_name"><h5>Your Name:</h5>
            <FormInput 
              type="text" 
              value={newSpot.owner_name} 
              onChange={this.props.handleChange} 
              name={'owner_name'} 
              placeholder={`Owner's Name`} />
          </label>
          <label for="owner_email"><h5>Your Email:</h5>
            <FormInput 
              type="text" 
              value={newSpot.owner_email} 
              onChange={this.props.handleChange} 
              name={'owner_email'} 
              placeholder={`email@email.com`} />
          </label>
          <label for="size_length" className="shortlabel"><h5>Spot Length:<br/><sup>(in feet)</sup></h5>
            <FormInput type="text" 
              value={newSpot.size_length} 
              onChange={this.props.handleChange} 
              name={'size_length'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="size_width" className="shortlabel"><h5>Spot Width:<br/><sup>(in feet)</sup></h5>
            <FormInput 
              type="text" 
              value={newSpot.size_width} 
              onChange={this.props.handleChange} 
              name={'size_width'} 
              placeholder={'#'} 
              className="short"/>
          </label>
          <label for="utilities"><h5>Utilities Available:</h5>
            <FormInput 
              type="text" 
              value={newSpot.utilities} 
              onChange={this.props.handleChange} 
              name={'utilities'} 
              placeholder={'Electric, water, internet, none'} />
            </label>
          <label for="privacy"><h5>Privacy Details:</h5>
            <FormInput 
              type="text" 
              value={newSpot.privacy} 
              onChange={this.props.handleChange} 
              name={'privacy'} 
              placeholder={'Are there neighbors around the space?'} />
            </label>
          <label for="pets" className="shortlabel"><h5>Are Pets Allowed?:</h5>
            <select
              value={newSpot.pets} 
              onChange={this.props.handleChange} 
              name={'pets'}
              className="short">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            </label>
            <label for="description" className="extralonglabel"><h5>Description:</h5>
            <textarea
              value={newSpot.description} 
              onChange={this.props.handleChange} 
              name={'description'} 
              placeholder={'Description'} 
              rows={5}
              className="long"/>
            </label>  
          <div className="fit"><button>Submit</button></div>
        </form>
      </div>
    );
  }
}