var MongoClient = require('mongodb').MongoClient

var countryQueryHelper = {
  url: 'mongodb://localhost:27017/countriesOfWorld',
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var countryCollection = db.colleciton('country')
      countryCollection.find().toArray(function(err.docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = countryQueryHelper
