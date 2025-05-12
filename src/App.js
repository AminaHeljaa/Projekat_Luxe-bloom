// src/App.js

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ONama from "./pages/onama";
import Kontakt from "./pages/kontakt";
import Prijava from "./pages/prijava";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Navbar from "./components/navbar";
import ErrorBoundary from './ErrorBoundary'; // Uvezi ErrorBoundary



function App() {
  const [korisnik, setKorisnik] = useState(null);

  useEffect(() => {
    const ulogovani = localStorage.getItem("korisnik");
    if (ulogovani) {
      setKorisnik(JSON.parse(ulogovani));
    }
  }, []);

  return (
    <ErrorBoundary> {/* Obavijemo celu aplikaciju sa ErrorBoundary */}
      <Navbar korisnik={korisnik} />
      {korisnik && (
        <div className="text-center bg-yellow-100 text-yellow-800 p-2">
          Ulogovani ste kao: <strong>{korisnik.ime}</strong> ({korisnik.uloga})
        </div>
      )}
  
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/onama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
