import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import axios from 'axios'
import { BASE_URL, IMAGE_PATH } from './globals'
import Home from './pages/Home';
import Nav from './components/Nav'
import Listings from './pages/Listings'
import SpotDetails from './pages/SpotDetails';
import ListingForm from './pages/ListingForm';

import homeowner from './styles/images/homeowner.png'
import thow from './styles/images/thow.png'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null, // Must be set to owner or parker, which will inform display of other pages/page options down the line.
      listings: [],
      newSpot: { /* see spotSchema for included info */}
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/listings/all`)
    this.setState({ listings: res.data.spots})
  }

  addListing = (e) => {
    e.preventDefault()
    const currentListings = this.state.listings;
    const newSpot = { ...this.state.newSpot, id: parseInt(this.state.listings.length + 1), price: parseInt(this.state.newSpot.price) };
    currentListings.push(newSpot);
    this.setState({ listings: currentListings, newSpot: { /* reset to empty key-value pairs */ } });
  }

  handleChange = (e) => {
    this.setState({ newSpot: { ...this.state.newSpot, [e.target.name]: e.target.value } });
  }

  setUser = (e) => {
    this.setState({ user: e.target.id })
  }

  render() {

          // only owner can see /new (Listing Form)

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
              <Route exact path="/listings/all" component={(props) => <Listings {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route path="/listings/:id" component={(props) => <SpotDetails {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route exact path="/listing-new" render={(props) => <ListingForm {...props} newSpot={this.state.newSpot} handleChange={this.handleChange} addListing={this.addListing} />} />
            </Switch>
          </main>
      </div>) : (
        <div className="greet">
          <div className="pretopper">
            <h1>Welcome to Wheel Estate!</h1>
            <p>The definitive tiny house parking app. What has long been the biggest drawback of tiny living is now an easy one-stop-shop. <br/><br/> We connect landowners and tiny-dwellers for an easy, mutually-beneficial relationship. That said, are you:</p>
          </div>
        <div className="choice">
          <button className="left" id="owner" onClick={this.setUser}>
            <img src={homeowner} alt="house on property" id="owner" />
            <h2 id="owner">a property owner with space to rent?</h2>

          </button>
          <button className="right" id="parker" onClick={this.setUser}>
            <img src={thow} alt="tiny house on wheels" id="parker" />
            <h2 id="parker">a tiny-homeowner seeking parking?</h2>

          </button>
        </div>
        </div>
      )}
    </div>
  );
}
}