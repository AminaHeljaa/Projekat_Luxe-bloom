const express = require('express');
const router = express.Router();
const Poruka = require('../models/Poruka');

router.get('/', async (req, res) => {
  try {
    const poruke = await Poruka.find().sort({ datum: -1 });
    res.json(poruke);
  } catch (err) {
    res.status(500).json({ error: 'Greška pri dohvatu poruka' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novaPoruka = new Poruka(req.body);
    await novaPoruka.save();
    res.status(201).json(novaPoruka);
  } catch (err) {
    res.status(500).json({ error: 'Greška pri slanju poruke' });
  }
});

module.exports = router;
