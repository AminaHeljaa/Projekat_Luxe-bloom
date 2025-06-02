const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Ruta za registraciju
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Provjera da li već postoji korisnik
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Korisnik već postoji" });
    }

    // Hashovanje šifre
    const hashedPassword = await bcrypt.hash(password, 10);

    // Novi korisnik
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "Korisnik uspješno registrovan" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Greška na serveru" });
  }
});

module.exports = router;
