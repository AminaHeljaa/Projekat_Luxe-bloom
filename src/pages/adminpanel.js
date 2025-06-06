import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [proizvod, setProizvod] = useState({ naziv: '', cijena: '', opis: '' });
  const [poruke, setPoruke] = useState([]);
  const [porukaStatus, setPorukaStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPoruke(data);
        else if (data.poruke) setPoruke(data.poruke);
        else setPoruke([]);
      })
      .catch(err => console.error('Greška pri dohvatu poruka:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        naziv: proizvod.naziv,
        cijena: Number(proizvod.cijena),
        opis: proizvod.opis,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setPorukaStatus('✅ Proizvod je uspješno dodat!');
        setProizvod({ naziv: '', cijena: '', opis: '' });
      })
      .catch(() => setPorukaStatus('❌ Greška pri dodavanju proizvoda'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProizvod({ ...proizvod, [name]: value });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 space-y-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-6 text-center drop-shadow-lg">
        Admin Panel
      </h1>

      {/* Forma za dodavanje proizvoda */}
      <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-pink-300 pb-2">
          Dodaj novi proizvod
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="naziv"
            placeholder="Naziv proizvoda"
            value={proizvod.naziv}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="number"
            name="cijena"
            placeholder="Cijena"
            value={proizvod.cijena}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <textarea
            name="opis"
            placeholder="Opis proizvoda"
            value={proizvod.opis}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md px-6 py-3 transition shadow-md focus:ring-4 focus:ring-pink-400"
          >
            Dodaj proizvod
          </button>
        </form>
        {porukaStatus && (
          <p className={`mt-4 text-center font-medium ${
            porukaStatus.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}>
            {porukaStatus}
          </p>
        )}
      </section>

      {/* Poruke iz kontakt forme */}
      <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-pink-300 pb-2">
          Poruke iz kontakt forme
        </h2>

        {poruke.length === 0 ? (
          <p className="text-center text-gray-500 italic">Nema pristiglih poruka.</p>
        ) : (
          <ul className="space-y-6 max-h-96 overflow-y-auto">
            {poruke.map((poruka) => (
              <li
                key={poruka._id}
                className="border border-gray-200 rounded-lg p-5 bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-pink-700 text-lg">{poruka.ime}</h3>
                  <time className="text-xs text-gray-400">
                    {new Date(poruka.datum).toLocaleString()}
                  </time>
                </div>
                <div className="text-sm text-gray-600 mb-2">{poruka.email}</div>
                <p className="text-gray-800 whitespace-pre-wrap">{poruka.tekst}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default AdminPanel;
