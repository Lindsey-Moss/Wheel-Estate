const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpotSchema = new Schema(
  {
    title: { type: String, required: true},
    owner_name: { type: String, required: true },
    owner_email: { type: String, required: true },
    price: { type: String},
    image: { type: String},
    available_spots: { type: String},
    size_length: {type: String},
    size_width: {type: String},
    utilities: {type: String, enum: ['Electric', 'Water', 'Internet', 'electric', 'water', 'internet', 'None', 'none']},
    description: { type: String, required: true },
    privacy: {type: String},
    pets: {type: String},
    location: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = SpotSchema