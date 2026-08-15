import React, { useState, useEffect } from 'react';

// Iz localStorage uzimamo poruke i parfeme
const AdminDashboard = () => {
  // Poruke iz kontakta
  const [poruke, setPoruke] = useState(() => {
    const saved = localStorage.getItem('poruke');
    return saved ? JSON.parse(saved) : [];
  });

  // Novi parfem
  const [noviParfem, setNoviParfem] = useState({ id: '', naziv: '', cijena: '', opis: '', slika: '' });
  const [parfemi, setParfemi] = useState(() => {
    const saved = localStorage.getItem('parfemi');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('poruke', JSON.stringify(poruke));
  }, [poruke]);

  useEffect(() => {
    localStorage.setItem('parfemi', JSON.stringify(parfemi));
  }, [parfemi]);

  const handleDodajParfem = (e) => {
    e.preventDefault();
    if (!noviParfem.id || !noviParfem.naziv || !noviParfem.cijena) {
      alert('Unesite barem id, naziv i cijenu parfema');
      return;
    }

    setParfemi((prev) => [...prev, { ...noviParfem, cijena: parseFloat(noviParfem.cijena) }]);
    setNoviParfem({ id: '', naziv: '', cijena: '', opis: '', slika: '' });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-4xl font-bold text-pink-700 mb-8">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Komentari / Poruke iz kontakta</h2>
        {poruke.length === 0 ? (
          <p>Nema novih poruka.</p>
        ) : (
          <ul className="space-y-4 max-w-xl">
            {poruke.map((p, i) => (
              <li key={i} className="bg-white p-4 rounded shadow">
                <p><strong>Ime:</strong> {p.ime}</p>
                <p><strong>Email:</strong> {p.email}</p>
                <p><strong>Poruka:</strong> {p.poruka}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dodaj novi parfem</h2>
        <form onSubmit={handleDodajParfem} className="max-w-xl space-y-4 bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="ID parfema"
            value={noviParfem.id}
            onChange={(e) => setNoviParfem({ ...noviParfem, id: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Naziv parfema"
            value={noviParfem.naziv}
            onChange={(e) => setNoviParfem({ ...noviParfem, naziv: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="number"
            step="0.01"
            placeholder="Cijena (KM)"
            value={noviParfem.cijena}
            onChange={(e) => setNoviParfem({ ...noviParfem, cijena: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Opis"
            value={noviParfem.opis}
            onChange={(e) => setNoviParfem({ ...noviParfem, opis: e.target.value })}
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            placeholder="URL slike"
            value={noviParfem.slika}
            onChange={(e) => setNoviParfem({ ...noviParfem, slika: e.target.value })}
            className="w-full p-3 border rounded"
          />
          <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
            Dodaj parfem
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;
