// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-pink-700">Luxe Bloom</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/korpa">Korpa</Link></li>
        <li><Link to="/onama">O nama</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/prijava">Prijava</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
