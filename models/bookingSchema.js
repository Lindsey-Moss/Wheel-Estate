const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema(
  {
    space_id: { /* type: Object Id...? idk , required: true */ },
    owner_name: { type: String, required: true },
    owner_email: {type: String, required: true },
    parker_name: {type: String, required: true},
    parker_email: {type: String, required: true },
    cost: {type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Booking', bookingSchema)