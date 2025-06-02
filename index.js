require('dotenv').config();
const express = require('express');
const connectDB = require('./database'); // putanja do database.js
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Poveži bazu pre starta servera
connectDB();

app.use('/api/auth', authRoutes);

// Test ruta
app.get('/', (req, res) => {
    res.send('Backend server radi!');
});

// Start servera
app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
});
