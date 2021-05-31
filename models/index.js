const mongoose = require('mongoose')
const BookingSchema = require('./booking')
const SpotSchema = require('./spot')

const Booking = mongoose.model('bookings', BookingSchema)
const Spot = mongoose.model('spots', SpotSchema)

module.exports = {
  Booking,
  Spot
}