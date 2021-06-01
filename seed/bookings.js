const db = require('../db')
const { Booking } = require("../models");

const main = async () => {
 const bookings = [
  {
    "space_id": "",
    "owner_name": "Test Person",
    "owner_email": "fake@email.com",
    "parker_name": "Test Person 2",
    "parker_email": "fakee@email.com",
    "cost": 950.00
  },
  {
    "space_id": "",
    "owner_name": "Test Person Again",
    "owner_email": "fake@email.com",
    "parker_name": "Test Person 3",
    "parker_email": "fakee@email.com",
    "cost": 950.00
  },
  {
    "space_id": "",
    "owner_name": "Test Person Once More",
    "owner_email": "fake@email.com",
    "parker_name": "Test Person 4",
    "parker_email": "fakee@email.com",
    "cost": 950.00
  }
]
await Booking.insertMany(bookings)
}
const run = async() => {
  await main()
  db.close()
}

run()