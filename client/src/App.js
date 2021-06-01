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

  render() {

          // choose owner or parker first
          // only owner can see /new (Listing Form)

  return (
    <div className="App">
       <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings/all" component={(props) => <Listings {...props} listings={this.state.listings} user={this.state.user} />} />
            <Route path="/listings/:id" component={(props) => <SpotDetails {...props} listings={this.state.listings} user={this.state.user} />} />
            <Route exact path="/listings/new" render={(props) => <ListingForm {...props} newSpot={this.state.newSpot} handleChange={this.handleChange} addListing={this.addListing} />} />
          </Switch>
        </main>
      </div >
  );
}
}