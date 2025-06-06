const mongoose = require('mongoose');

const proizvodSchema = new mongoose.Schema({
  naziv: String,
  cijena: Number,
  opis: String
});

module.exports = mongoose.model('Proizvod', proizvodSchema);
