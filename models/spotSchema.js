const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema(
  {
    title: { type: String, required: true},
    owner_name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    available_spots: { type: Number, required: true},
    size_length: {type: Number, required: true},
    size_width: {type: Number, required: true},
    utilities: {type: String, enum: ['electric', 'water', 'internet', 'none'], required: true},
    description: { type: String, required: true },
    privacy: {type: String, required: true},
    pets: {type: Boolean, required: true},
    location: {type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = mongoose.model('Spot', spotSchema)