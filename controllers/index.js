const Spot = require('../models/spotSchema')

// get all listings
const getAllSpots = async (req, res) => {
  try {
    const spots = await Spot.find()
    return res.status(200).json({ spots })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// post new listing
// needs followup and review
const createNewListing = async (req, res) => {
  try {
    const spot = await new Spot(req.body)
    await spot.save()
    return res.status(201).json({
      spot,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// put update listing
const updateListing = async (req, res) => {
  try {
    const { id } = req.params
    await Spot.findByIdAndUpdate(id, req.body, { new: true }, (err, spot) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!spot) {
        res.status(500).send('Parking spot listing not found!')
      }
      return res.status(200).json(spot)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete existing listing


module.exports = {
  getAllSpots,
  createNewListing,
  updateListing
}
