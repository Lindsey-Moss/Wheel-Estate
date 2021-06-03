import React, { Component } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals'
import FormInput from '../components/FormInput';


export default class EditListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spot: props.listings.find((spot) => spot._id === props.match.params._id)
    }
  }

  handleChange = (e) => {
    this.setState({ spot: { ...this.state.spot, [e.target.name]: e.target.value } });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let doublecheck = prompt(`Are you sure you want to change this listing? Please take a moment to double check the form for accuracy.

To confirm your changes, please type " YES ". Otherwise, click Cancel.`)
    if (doublecheck === "YES") {
      axios.put(`${BASE_URL}/listing-update/${this.state.spot._id}`, this.state.spot)
      alert(`The listing has been successfully updated. You will now be redirected.`)
      window.history.back()
      // window.location.reload()
      //// Reload will be implemented once the app has graduated
      //// from needing the landing, false sign-in page.
    } else if (!doublecheck) {
    } else {
      alert(`An error occurred during the update. Sorry about that!

The listing has not been changed.

Please try again in a few moments.`)
    }
  }


  render() {
    let spot = this.state.spot
    return (      
      <div className="page">
        <h2>Updating Listing # {spot._id}...</h2>
        <form onSubmit={this.handleSubmit} className="new-listing-form">
          <label for="title" className="longlabel"><h5>Listing Title:</h5>
            <FormInput 
              type="text" 
              value={spot.title} 
              onChange={this.handleChange} 
              name={'title'} 
              placeholder={'Listing Title'} 
              className="long" />
          </label>
          <label for="image"><h5>Photo URL:</h5>
            <FormInput 
              type="text" 
              value={spot.image} 
              onChange={this.handleChange} 
              name={'image'} 
              placeholder={'URL'} />
            </label>
          <label for="price" className="shortlabel"><h5>Listing Price:</h5>
            <FormInput 
              type="text" 
              value={spot.price} 
              onChange={this.handleChange} 
              name={'price'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="available_spots" className="shortlabel"><h5>Spaces Available:</h5>
            <FormInput 
              type="text" 
              value={spot.available_spots} 
              onChange={this.handleChange} 
              name={'available_spots'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="location" className="shortlabel"><h5>Zip Code:</h5>
            <FormInput 
              type="text" 
              value={spot.location} 
              onChange={this.handleChange} 
              name={'location'} 
              placeholder={'00000'} 
              className="short"/>
          </label>
          <label for="owner_name"><h5>Your Name:</h5>
            <FormInput 
              type="text" 
              value={spot.owner_name} 
              onChange={this.handleChange} 
              name={'owner_name'} 
              placeholder={`Owner's Name`} />
          </label>
          <label for="owner_email"><h5>Your Email:</h5>
            <FormInput 
              type="text" 
              value={spot.owner_email} 
              onChange={this.handleChange} 
              name={'owner_email'} 
              placeholder={`email@email.com`} />
          </label>
          <label for="size_length" className="shortlabel"><h5>Spot Length:<br/><sup>(in feet)</sup></h5>
            <FormInput type="text" 
              value={spot.size_length} 
              onChange={this.handleChange} 
              name={'size_length'} 
              placeholder={'#'} 
              className="short"/>
            </label>
          <label for="size_width" className="shortlabel"><h5>Spot Width:<br/><sup>(in feet)</sup></h5>
            <FormInput 
              type="text" 
              value={spot.size_width} 
              onChange={this.handleChange} 
              name={'size_width'} 
              placeholder={'#'} 
              className="short"/>
          </label>
          <label for="utilities"><h5>Utilities Available:</h5>
            <FormInput 
              type="text" 
              value={spot.utilities} 
              onChange={this.handleChange} 
              name={'utilities'} 
              placeholder={'Electric, water, internet, none'} />
            </label>
          <label for="privacy"><h5>Privacy Details:</h5>
            <FormInput 
              type="text" 
              value={spot.privacy} 
              onChange={this.handleChange} 
              name={'privacy'} 
              placeholder={'Are there neighbors around the space?'} />
            </label>
          <label for="pets" className="shortlabel"><h5>Are Pets Allowed?:</h5>
            <FormInput 
              type="text" 
              value={spot.pets} 
              onChange={this.handleChange} 
              name={'pets'} 
              placeholder={'Yes or No'} 
              className="short"/>
            </label>
            <label for="description" className="extralonglabel"><h5>Description:</h5>
            <FormInput 
              type="text-area" 
              value={spot.description} 
              onChange={this.handleChange} 
              name={'description'} 
              placeholder={'Description'} 
              className="long"/>
            </label>  
          <div className="fit"><button>Submit Changes</button></div>
        </form>
      </div>
    );
  }
}