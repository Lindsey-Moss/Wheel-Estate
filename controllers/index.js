const { Booking, Spot }  = require('../models')

// get
const getAllListings = async (req, res) => {
  try {
    const spots = await Spot.find()
    return res.status(200).json({ spots })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getListingById = async (req, res) => {
  try {
      const { id } = req.params;
      const spot = await Spot.findById(id)
      if (spot) {
          return res.status(200).json({ spot });
      }
      return res.status(404).send('Listing with the specified ID does not exist.');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
    return res.status(200).json({ bookings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookingById = async (req, res) => {
  try {
      const { id } = req.params;
      const booking = await Booking.findById(id)
      if (booking) {
          return res.status(200).json({ booking });
      }
      return res.status(404).send('Listing with the specified ID does not exist.');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// post new
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

const createNewBooking = async (req, res) => {
  try {
    const booking = await new Booking(req.body)
    await booking.save()
    return res.status(201).json({
      booking,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}

// put update listing
// works; review how it is integrated with frontend
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

// delete existing 
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Spot.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Listing deleted");
    }
    throw new Error("Listing not found");
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message);
  }
}

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Booking.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Booking deleted')
    }
    throw new Error('Booking not found')
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getAllListings,
  getListingById,
  getAllBookings,
  getBookingById,
  createNewListing,
  createNewBooking,
  updateListing,
  deleteListing,
  deleteBooking
}
