import React, { Component } from 'react';
import FormInput from '../components/FormInput';


export default class BookingForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBooking(e)
  }

  render() {
    const newBooking = this.props
    return (
    
      <div className="page">
        <h1>Information Required For Booking:</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="parker_name" ><h5>Listing Title:</h5>
              <FormInput 
                type="text" 
                value={newBooking.parker_name} 
                onChange={this.props.handleChange} 
                name={'parker_name'} 
                placeholder={'Your Name'} />
          </label>
          <label for="email" ><h5>Your Email:</h5>
            <FormInput 
              type="text" 
              value={newBooking.parker_email} 
              onChange={this.props.handleChange} 
              name={'parker_email'} 
              placeholder={'something@email.com'} />
          </label>
          <div className="fit"><button>Submit</button></div>
        </form>
      </div>
    );
  }
}