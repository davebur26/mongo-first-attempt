var express = require('express')
var app = express()
var countryRouter = require('./controllers/country_controller.js')

// app.use(express.static(__dirname + '/../client/build'))

app.use('/api/countrys', countryRouter)

app.listen(3000, function () {
  console.log('App running')
})
