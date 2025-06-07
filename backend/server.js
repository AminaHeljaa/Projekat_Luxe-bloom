console.log("Pokrećem server...");

// Dodaj dotenv na vrhu
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Konektuj se na MongoDB iz .env fajla
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Connection error:', err));

// Schema i model za proizvod
const proizvodSchema = new mongoose.Schema({
  naziv: String,
  cijena: Number,
  opis: String,
});

const Proizvod = mongoose.model('Proizvod', proizvodSchema);

// Schema i model za poruku iz kontakta
const porukaSchema = new mongoose.Schema({
  ime: String,
  email: String,
  tekst: String,
  datum: { type: Date, default: Date.now },
});

const Poruka = mongoose.model('Poruka', porukaSchema);

// API endpointi

// Dodaj novi proizvod (Admin)
app.post('/api/products', async (req, res) => {
  try {
    const { naziv, cijena, opis } = req.body;
    const noviProizvod = new Proizvod({ naziv, cijena, opis });
    await noviProizvod.save();
    res.status(201).json({ message: 'Proizvod dodat' });
  } catch (error) {
    res.status(500).json({ message: 'Greška prilikom dodavanja proizvoda' });
  }
});

// Dohvati sve proizvode
app.get('/api/products', async (req, res) => {
  try {
    const proizvodi = await Proizvod.find();
    res.json(proizvodi);
  } catch (error) {
    res.status(500).json({ message: 'Greška prilikom dohvata proizvoda' });
  }
});

// Dodaj poruku iz kontakta
app.post('/api/messages', async (req, res) => {
  try {
    const { ime, email, tekst } = req.body;
    const novaPoruka = new Poruka({ ime, email, tekst });
    await novaPoruka.save();
    res.status(201).json({ message: 'Poruka poslana' });
  } catch (error) {
    res.status(500).json({ message: 'Greška prilikom slanja poruke' });
  }
});

// Dohvati sve poruke (Admin)
app.get('/api/messages', async (req, res) => {
  try {
    const poruke = await Poruka.find();
    res.json(poruke);
  } catch (error) {
    res.status(500).json({ message: 'Greška prilikom dohvata poruka' });
  }
});

// *NOVO* Brisanje poruke po ID-u
app.delete('/api/messages/:id', async (req, res) => {
  try {
    await Poruka.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Poruka obrisana' });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri brisanju poruke' });
  }
});

app.listen(PORT, () => {
 console.log(`Server radi na portu ${PORT}`);

});