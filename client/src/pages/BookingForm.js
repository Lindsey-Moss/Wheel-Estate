import React, { Component } from 'react';
import FormInput from '../components/FormInput';


export default class BookingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listingId: props.match.params._id
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBooking(e, this.state.listingId)
  }

  render() {
    const newBooking = this.props
    return (
    
      <div className="page">
        <h1>Information Required For Booking:</h1>
        <form onSubmit={this.handleSubmit} className="new-booking-form">
          <label for="parker_name" ><h5>Your Name:</h5>
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