const mongoose = require('mongoose');

const porukaSchema = new mongoose.Schema({
  ime: String,
  email: String,
  tekst: String,
  datum: Date
});

module.exports = mongoose.model('Poruka', porukaSchema);
