const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// 🔒 Middleware za provjeru tokena i admin prava
function verifyAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token nije dostavljen." });

  try {
    const decoded = jwt.verify(token, "tajni_kljuc");
    if (!decoded.isAdmin) return res.status(403).json({ error: "Nedozvoljen pristup." });
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Neispravan token." });
  }
}

// ✅ POST /api/admin/dodaj-proizvod – dodavanje novog proizvoda
router.post("/dodaj-proizvod", verifyAdmin, async (req, res) => {
  try {
    const { naziv, opis, cijena } = req.body;
    const newProduct = new Product({ naziv, opis, cijena });
    await newProduct.save();
    res.status(201).json({ message: "Proizvod uspješno dodat." });
  } catch (err) {
    res.status(500).json({ error: "Greška pri dodavanju proizvoda." });
  }
});

// ✅ GET /api/admin/korisnici – prikaz svih korisnika
router.get("/korisnici", verifyAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // bez lozinki
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Greška pri dohvatanju korisnika." });
  }
});

module.exports = router;
