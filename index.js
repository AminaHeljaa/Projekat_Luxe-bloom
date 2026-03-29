require('dotenv').config();
const express = require('express');
const connectDB = require('./database'); // Povezivanje na bazu
const authRoutes = require('./routes/auth');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// 🔌 Povezivanje s bazom
connectDB();

// 🔐 Ubacivanje admina ako ne postoje
async function ubaciAdmineAkoNePostoje() {
    const admini = [
        { username: "Bakir", email: "bakir@luxebloom.com", password: "bakir123" },
        { username: "Hana", email: "hana@luxebloom.com", password: "hana123" },
        { username: "Amina", email: "amina@luxebloom.com", password: "amina123" },
    ];

    for (const admin of admini) {
        const postoji = await User.findOne({ email: admin.email });
        if (!postoji) {
            const hashed = await bcrypt.hash(admin.password, 10);
            const noviAdmin = new User({
                username: admin.username,
                email: admin.email,
                password: hashed,
                isAdmin: true,
            });
            await noviAdmin.save();
            console.log(`✅ Admin ${admin.username} dodat.`);
        } else {
            console.log(`ℹ️ Admin ${admin.username} već postoji.`);
        }
    }
}

// ⏳ Poziv odmah pri startu
ubaciAdmineAkoNePostoje();

// 📦 Rute
app.use('/api/auth', authRoutes);

// ✅ Test ruta
app.get('/', (req, res) => {
    res.send('Backend server radi!');
});

// 🚀 Start servera
app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
});
