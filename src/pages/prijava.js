import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Prijava = ({ onLogin }) => {
  const [korIme, setKorIme] = useState('');
  const [lozinka, setLozinka] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const korisnici = [
    { korisnickoIme: 'Amina', lozinka: 'amina123', uloga: 'admin' },
    { korisnickoIme: 'Hana', lozinka: 'hana123', uloga: 'admin' },
    {kornickoIme: 'Korisnik',lozinka:'korisnik123',uloga:'korisnik'}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const korisnik = korisnici.find(
      (k) => k.korisnickoIme === korIme && k.lozinka === lozinka
    );
    if (korisnik) {
      onLogin(korisnik);
      localStorage.setItem("korisnik", JSON.stringify(korisnik));
      navigate("/");
    } else {
      setError('Neispravno korisničko ime ili lozinka.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center text-pink-700">Prijava</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Korisničko ime"
          value={korIme}
          onChange={(e) => setKorIme(e.target.value)}
          required
          className="border px-3 py-2 rounded focus:outline-pink-500"
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={lozinka}
          onChange={(e) => setLozinka(e.target.value)}
          required
          className="border px-3 py-2 rounded focus:outline-pink-500"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-pink-700 text-white rounded py-2 hover:bg-pink-800 transition"
        >
          Prijavi se
        </button>
      </form>
    </div>
  );
};

export default Prijava;
