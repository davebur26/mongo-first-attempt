use countriesOfWorld;

db.dropDatabase()

db.country.insert([
  {
    name: "Scotland",
    continent: "Europe"
  },
  {
    name: "Argentina",
    continent: "South America"
  }
])

db.country.find()
