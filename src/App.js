import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ONama from "./pages/onama";
import Kontakt from "./pages/kontakt";
import Prijava from "./pages/prijava";
import Korpa from "./pages/korpa";
import AdminPanel from './pages/adminpanel';

function App() {
  const [korisnik, setKorisnik] = useState(null);

  useEffect(() => {
    const ulogovani = localStorage.getItem("korisnik");
    if (ulogovani) {
      setKorisnik(JSON.parse(ulogovani));
    }
  }, []);

  const handleLogin = (korisnik) => {
    setKorisnik(korisnik);
  };

  const handleLogout = () => {
    localStorage.removeItem("korisnik");
    setKorisnik(null);
  };

  return (
    <>
      <Navbar korisnik={korisnik} onLogout={handleLogout} />
      {korisnik && (
        <div className="text-center bg-yellow-100 text-yellow-800 p-2">
          Ulogovani ste kao: <strong>{korisnik.korisnickoIme}</strong> ({korisnik.uloga})
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/prijava" element={<Prijava onLogin={handleLogin} />} />
        <Route path="/korpa" element={<Korpa />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
