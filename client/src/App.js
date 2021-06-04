import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import axios from 'axios'
import { BASE_URL } from './globals'
import Home from './pages/Home';
import Nav from './components/Nav'
import Listings from './pages/Listings'
import SpotDetails from './pages/SpotDetails';
import ListingForm from './pages/ListingForm';
import Bookings from './pages/Bookings'
import BookingForm from './pages/BookingForm'
import EditListing from './pages/EditListing'

import homeowner from './styles/images/homeowner.png'
import thow from './styles/images/thow.png'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null, 
      listings: [],
      bookings: [],
      newSpot: { title: '', owner_name: '', price: '', description: '', image:'', available_spots:'', size_length:'', size_width:'', utilities:'', privacy:'', pets:'', location:''},
      newBooking: { space_id: '', owner_name: '', owner_email: '', parker_name: '', parker_email:'', cost:'' }
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/listings/all`)
    const ress = await axios.get(`${BASE_URL}/bookings/all`)
    this.setState({ listings: res.data.spots, bookings: ress.data.bookings})
  }

  addListing = (e) => {
    e.preventDefault()
    const currentListings = this.state.listings;
    const newSpot = { ...this.state.newSpot };
    currentListings.push(newSpot);
    axios.post(`${BASE_URL}/listing-new`, newSpot)
    this.setState({ listings: currentListings, newSpot: { title: '', owner_name: '', price: '', description: '', image:'', available_spots:'', size_length:'', size_width:'', utilities:'', privacy:'', pets:'', location:'' } });
    window.history.back()
  }

  addBooking = (e, listingId) => {
    e.preventDefault()
    const currentBookings = this.state.bookings;
    const thisListing = this.state.listings.find((spot) => spot._id === listingId)
    const newBooking = { ...this.state.newBooking, owner_name: thisListing.owner_name, owner_email: thisListing.owner_email, cost: thisListing.price, space_id: thisListing._id};
    currentBookings.push(newBooking);
    axios.post(`${BASE_URL}/booking-new`, newBooking)
    this.setState({ bookings: currentBookings, newBooking: { space_id: '', owner_name: '', owner_email: '', parker_name: '', parker_email:'', cost:'' }});
  }

  handleChange = (e) => {
    this.setState({ newSpot: { ...this.state.newSpot, [e.target.name]: e.target.value } });
  }

  handleBook = (e) => {
    this.setState({ newBooking: { ...this.state.newBooking, [e.target.name]: e.target.value } });
  }

  setUser = (e) => {
    this.setState({ user: e.target.id })
  }

  render() {
  return (
    <div>
      {this.state.user ? (
      <div className="App">
        <header>
            <Nav user ={this.state.user}/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/listings/all" component={(props) => <Listings {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route path="/listings/:_id" component={(props) => <SpotDetails {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route path="/listing-new" render={(props) => <ListingForm {...props} newSpot={this.state.newSpot} handleChange={this.handleChange} addListing={this.addListing} />} />
              <Route path="/bookings/all" component={(props) => <Bookings {...props} bookings={this.state.bookings} user={this.state.user} />} />
              <Route path="/booking-new/:_id" render={(props) => <BookingForm {...props} bookings={this.state.bookings} newBooking={this.state.newBooking} handleChange={this.handleBook} addBooking={this.addBooking} />} />
              <Route path="/listing-update/:_id" component={(props) => <EditListing {...props} listings={this.state.listings} user={this.state.user} />} />
            </Switch>
          </main>
      </div>) : (
        <div className="greet">
          <div className="pretopper">
            <h1>Welcome to <span style={{color:'#ffde35'}}>Wheel Estate</span>!</h1>
            <h2>Are you a:</h2>
          </div>
        <div className="choice">
          <div className="left" id="owner" onClick={this.setUser}>
            <img src={homeowner} alt="house on property" id="owner" />
            <h2 id="owner">Property owner with available space to rent out?</h2>
          </div>
          <div className="right" id="parker" onClick={this.setUser}>
            <img src={thow} alt="tiny house on wheels" id="parker" />
            <h2 id="parker">Tiny-homeowner seeking a parking arrangement?</h2>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
}