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
    "image": "https://www.kxan.com/wp-content/uploads/sites/40/2017/09/rainbow-parking-spot_35316482_ver1.0.jpg?w=1200&h=900&crop=1"
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
    "image": "https://i.pinimg.com/originals/66/0a/be/660abea1fa401212d51a59aecd6337df.jpg"
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
    "image": "https://www.businessinsider.in/thumb/msid-79725102,width-600,resizemode-4,imgsize-1043859/thelife/news/tiny-house-owners-are-facing-evictions-or-living-under-the-radar-because-their-homes-are-considered-illegal-in-most-parts-of-the-us/img5fc9571d037cbd0018613b64.jpg"
  }
]
  await Spot.insertMany(spots)
}
const run = async() => {
  await main()
  db.close()
}

run()