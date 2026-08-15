// src/components/Hero.js
import React from "react";
import heroImage from "../assets/hero2.jpg";


const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
  
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Dobrodošli u Luxe Bloom</h1>
        <p className="text-xl mb-6">
          Mjesto gdje luksuz susreće ljepotu. Istraži naše parfeme i kozmetiku.
        </p>
        <a
          href="/onama"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition"
        >
          Saznaj više
        </a>
      </div>
    </div>
  );
};

export default Hero;
