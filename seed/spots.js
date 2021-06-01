const db = require('../db')
const { Spot } = require("../models");

const main = async () => {
 const spots = [
  {
    "title": "TEST LISTING 1",
    "owner_name": "Test Person 1",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Test Description",
    "privacy": "Test string",
    "pets": false,
    "location": 80010,
    "image": "https://testimage.com/plant.png"
  },
  {
    "title": "TEST LISTING 2",
    "owner_name": "Test Person 2",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Test Description",
    "privacy": "Test string",
    "pets": false,
    "location": 80010,
    "image": "https://testimage.com/plant.png"
  },
  {
    "title": "TEST LISTING 3",
    "owner_name": "Test Person 3",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Test Description",
    "privacy": "Test string",
    "pets": false,
    "location": 80010,
    "image": "https://testimage.com/plant.png"
  }
]
  await Spot.insertMany(spots)
}
const run = async() => {
  await main()
  db.close()
}

run()