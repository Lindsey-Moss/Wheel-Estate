const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('I am root!')
})

router.get('/listings/all', controllers.getAllListings)
router.get('/listings/:id', controllers.getListingById)
router.get('/bookings/all', controllers.getAllBookings)
router.get('/bookings/:id', controllers.getBookingById)

router.post('/listings/new', controllers.createNewListing)
router.post('/bookings/new', controllers.createNewBooking)

router.put('/listings/update/:id', controllers.updateListing)

router.delete('/listings/delete/:id', controllers.deleteListing)
router.delete('/bookings/delete/:id', controllers.deleteBooking)


module.exports = router