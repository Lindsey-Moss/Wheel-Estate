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
      newSpot: { title: '', owner_name: '', price: '', description: '', image:'', available_spots:'', size_length:'', size_width:'', utilities:'', privacy:'', pets:'', location:''}
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/listings/all`)
    this.setState({ listings: res.data.spots})
  }

  addListing = (e) => {
    e.preventDefault()
    const currentListings = this.state.listings;
    const newSpot = { ...this.state.newSpot };
    currentListings.push(newSpot);
    axios.post(`${BASE_URL}/listing-new`, newSpot)
    this.setState({ listings: currentListings, newSpot: { title: '', owner_name: '', price: '', description: '', image:'', available_spots:'', size_length:'', size_width:'', utilities:'', privacy:'', pets:'', location:'' } });
  }

  handleChange = (e) => {
    this.setState({ newSpot: { ...this.state.newSpot, [e.target.name]: e.target.value } });
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
              <Route exact path="/listings/all" component={(props) => <Listings {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route path="/listings/:_id" component={(props) => <SpotDetails {...props} listings={this.state.listings} user={this.state.user} />} />
              <Route exact path="/listing-new" render={(props) => <ListingForm {...props} newSpot={this.state.newSpot} handleChange={this.handleChange} addListing={this.addListing} />} />
            </Switch>
          </main>
      </div>) : (
        <div className="greet">
          <div className="pretopper">
            <h1>Welcome to <span style={{color:'#ffde35'}}>Wheel Estate!</span></h1>
            <p>We connect landowners and tiny-dwellers for an easy, mutually-beneficial relationship. <br/><br/>That said, are you a:</p>
          </div>
        <div className="choice">
          <button className="left" id="owner" onClick={this.setUser}>
            <img src={homeowner} alt="house on property" id="owner" />
            <h2 id="owner">Property owner with available space to rent out?</h2>

          </button>
          <button className="right" id="parker" onClick={this.setUser}>
            <img src={thow} alt="tiny house on wheels" id="parker" />
            <h2 id="parker">Tiny-homeowner seeking a parking arrangement?</h2>

          </button>
        </div>
        </div>
      )}
    </div>
  );
}
}