import React, { Component } from 'react';
// import FormInput from '../components/FormInput';


export default class EditListing extends Component {

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.addListing(e)
  // }

  render() {
    const { spot } = this.props
    return (

      // see bookingSchema in backend for info required
      
      <div>
        <h1>Updating Listing ID # {spot._id}...</h1>
        {/* <form onSubmit={this.handleSubmit}>
          <FormInput type="text" value={newSpot.name} onChange={this.props.handleChange} name={'name'} placeholder={'name'} />
          <FormInput type="text" value={newSpot.img} onChange={this.props.handleChange} name={'img'} placeholder={'image'} />
          <FormInput type="text-area" value={newSpot.description} onChange={this.props.handleChange} name={'description'} placeholder={'description'} />
          <FormInput type="text" value={newSpot.price} onChange={this.props.handleChange} name={'price'} placeholder={'price'} />
          <button>Submit</button>
        </form> */}
      </div>
    );
  }
}