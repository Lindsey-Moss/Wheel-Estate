const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.get('*', (req, res) => {
  res.send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
