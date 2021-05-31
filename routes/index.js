const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('I am root!')
})

router.get('/listings', controllers.getAllSpots)

router.post('/new', controllers.createNewListing)

router.put('/update:id', controllers.updateListing)

module.exports = router