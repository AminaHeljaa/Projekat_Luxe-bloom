// src/components/HeroBanner.js
import React from 'react';
import heroImage from '../assets/hero.jpg'; // putanja prema slici

const HeroBanner = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-6 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dobrodošli u Luxe Bloom</h1>
        <p className="text-lg md:text-xl mb-6">Ekskluzivni parfemi za svaki stil</p>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Pogledaj ponudu
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
