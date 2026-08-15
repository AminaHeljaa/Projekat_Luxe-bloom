const express = require('express');
const router = express.Router();
const Proizvod = require('../models/Proizvod');

router.post('/', async (req, res) => {
  try {
    const novi = new Proizvod(req.body);
    await novi.save();
    res.status(201).json(novi);
  } catch (err) {
    res.status(500).json({ error: 'Greška pri dodavanju proizvoda' });
  }
});

module.exports = router;
