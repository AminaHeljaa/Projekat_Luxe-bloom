import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ONama from "./pages/onama";
import Kontakt from "./pages/kontakt";
import Prijava from "./pages/prijava";
import Admin from "./pages/admin";
import Navbar from "./components/navbar";
import Korpa from "./pages/korpa";
import ErrorBoundary from './ErrorBoundary';
import { CartProvider } from './context/CartContext';

function App() {
  const [korisnik, setKorisnik] = useState(null);

  useEffect(() => {
    const korisnikIzStorage = JSON.parse(localStorage.getItem("korisnik"));
    if (korisnikIzStorage) {
      setKorisnik(korisnikIzStorage);
    }
  }, []);

  return (
    <ErrorBoundary>
      <CartProvider>
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
          <Route path="/korpa" element={<Korpa />} />
        </Routes>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
