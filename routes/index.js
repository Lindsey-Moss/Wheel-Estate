const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('I am root!')
})

router.get('/listings', controllers.getAllListings)
router.get('/bookings', controllers.getAllBookings)

router.post('/new-listing', controllers.createNewListing)
router.post('/new-booking', controllers.createNewBooking)

router.put('/update-listing/:id', controllers.updateListing)

router.delete('/delete-listing/:id', controllers.deleteListing)
router.delete('/delete-booking/:id', controllers.deleteBooking)

module.exports = router