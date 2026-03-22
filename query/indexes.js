//Use this file to define indexes for your queries
db.Restaurantes.createIndex({ name: 1 })
db.Restaurantes.createIndex({ cuisine: 1})
db.Restaurantes.createIndex({ borough: 1 })
db.Restaurantes.createIndex({ "grades.score": 1 })
db.Restaurantes.createIndex({ "location.coordinates": "2dsphere" })
