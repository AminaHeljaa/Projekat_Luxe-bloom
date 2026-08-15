import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
    const [email, setEmail] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [ime, setIme] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // sprječava refresh

        const noviKorisnik = {
            ime,
            email,
            lozinka,           // 👉 mora se zvati isto kao u db.json
            uloga: "guest"     // 👉 ne "rola", nego "uloga"
        };

        try {
            const res = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noviKorisnik)
            });

            if (res.ok) {
                setIme('');
                setEmail('');
                setLozinka('');
                onRegister(noviKorisnik);
            } else {
                console.log('Greška prilikom registracije');
            }
        } catch (error) {
            console.log('Server nije dostupan!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registracija</h2>
            <label>Ime:</label>
            <input
                type='text'
                value={ime}
                onChange={(e) => setIme(e.target.value)}
                required
            />
            <label>Email:</label>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label>Lozinka:</label>
            <input
                type='password'
                value={lozinka}
                onChange={(e) => setLozinka(e.target.value)}
                required
            />
            <button type='submit'>Registruj se</button>
        </form>
    );
}

export default RegisterForm;
