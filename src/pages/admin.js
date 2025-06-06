import React, { useState, useEffect } from "react";

function Admin() {
  const [proizvod, setProizvod] = useState({ naziv: "", cijena: "", opis: "" });
  const [poruke, setPoruke] = useState([]);
  const [porukaStatus, setPorukaStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log("Podaci sa backend-a:", data);

        if (Array.isArray(data)) {
          setPoruke(data);
        } else if (Array.isArray(data.poruke)) {
          setPoruke(data.poruke);
        } else {
          setPoruke([]);
        }
      })
      .catch((err) => console.error("Greška pri dohvatu poruka:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        naziv: proizvod.naziv,
        cijena: Number(proizvod.cijena),
        opis: proizvod.opis,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setPorukaStatus("Proizvod je uspješno dodat!");
        setProizvod({ naziv: "", cijena: "", opis: "" });
      })
      .catch(() => setPorukaStatus("Greška pri dodavanju proizvoda"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProizvod({ ...proizvod, [name]: value });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin panel</h1>

      <h2>Dodaj novi proizvod</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv proizvoda"
          value={proizvod.naziv}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="cijena"
          placeholder="Cijena"
          value={proizvod.cijena}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="opis"
          placeholder="Opis proizvoda"
          value={proizvod.opis}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Dodaj proizvod</button>
      </form>
      {porukaStatus && <p>{porukaStatus}</p>}

      <h2>Poruke iz kontakta</h2>
      {poruke.length === 0 ? (
        <p>Nema pristiglih poruka.</p>
      ) : (
        <ul>
          {poruke.map((poruka) => (
            <li key={poruka._id}>
              <strong>{poruka.ime}</strong> ({poruka.email}):<br />
              {poruka.tekst}
              <br />
              <small>{new Date(poruka.datum).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;
