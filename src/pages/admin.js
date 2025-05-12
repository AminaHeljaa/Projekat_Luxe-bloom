import React, { useEffect, useState } from "react";

function Admin() {
  const [korisnici, setKorisnici] = useState([]);
  const [ulogovani, setUlogovani] = useState(null);

  useEffect(() => {
    const k = JSON.parse(localStorage.getItem("korisnik"));
    if (!k || k.uloga !== "admin") {
      alert("Pristup dozvoljen samo administratorima.");
      window.location.href = "/";
    } else {
      setUlogovani(k);
      fetch("http://localhost:5000/korisnici")
        .then((res) => res.json())
        .then((data) => setKorisnici(data));
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      <p className="mb-4">Dobrodošli, {ulogovani?.ime}!</p>
      <h3 className="text-xl font-semibold mb-2">Svi korisnici:</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Ime</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Uloga</th>
          </tr>
        </thead>
        <tbody>
          {korisnici.map((k) => (
            <tr key={k.id}>
              <td className="border p-2">{k.id}</td>
              <td className="border p-2">{k.ime}</td>
              <td className="border p-2">{k.email}</td>
              <td className="border p-2">{k.uloga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
