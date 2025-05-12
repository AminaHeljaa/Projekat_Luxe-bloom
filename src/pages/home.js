import React from 'react';
import heroImage from '../assets/hero.jpg';
import chanel from '../assets/parfem1.png';
import ysl from '../assets/parfem3.png';
import dior from '../assets/parfem2.png';
import parfem4 from '../assets/parfem4.png';
import parfem5 from '../assets/parfem5.png';
import parfem6 from '../assets/parfem6.png';
import parfem7 from '../assets/parfem7.png';

import { ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";

// Podaci za dodatne sekcije
const parfemi = [
  { id: 1, naziv: "Versace Bright Crystal", slika: parfem4 },
  { id: 2, naziv: "Tom Ford Black Orchid", slika: parfem5 },
  { id: 3, naziv: "Gucci Bloom", slika: parfem6 },
  { id: 4, naziv: "Lancome La Vie Est Belle", slika: parfem7 }
];

const sminka = [
  { id: 1, naziv: "Maybelline Maskara", slika: "https://i.imgur.com/Xa4tB7R.jpg" },
  { id: 2, naziv: "L'Oreal Ruž", slika: "https://i.imgur.com/mldEkPq.jpg" },
  { id: 3, naziv: "NYX Paleta", slika: "https://i.imgur.com/4z4RrcZ.jpg" },
  { id: 4, naziv: "Revlon Puder", slika: "https://i.imgur.com/OozsXWD.jpg" }
];

const njegaKoze = [
  { id: 1, naziv: "Nivea Hidratantna Krema", slika: "https://i.imgur.com/5H1s6AX.jpg" },
  { id: 2, naziv: "Garnier Micelarna Voda", slika: "https://i.imgur.com/0OQOq0X.jpg" },
  { id: 3, naziv: "The Ordinary Serum", slika: "https://i.imgur.com/1tE6iYB.jpg" },
  { id: 4, naziv: "Cerave Čistač", slika: "https://i.imgur.com/mkTTOy7.jpg" }
];

const kosa = [
  { id: 1, naziv: "Gliss Šampon", slika: "https://i.imgur.com/Lo8RfdO.jpg" },
  { id: 2, naziv: "L'Oreal Maska", slika: "https://i.imgur.com/g2kZTeb.jpg" },
  { id: 3, naziv: "Pantene Regenerator", slika: "https://i.imgur.com/3Zr8F3g.jpg" },
  { id: 4, naziv: "Syoss Sprej", slika: "https://i.imgur.com/VcwGzJ9.jpg" }
];

const nokti = [
  { id: 1, naziv: "Essie Lak", slika: "https://i.imgur.com/9Fi0IYu.jpg" },
  { id: 2, naziv: "Sally Hansen Tretman", slika: "https://i.imgur.com/RokSZXQ.jpg" },
  { id: 3, naziv: "Golden Rose Set", slika: "https://i.imgur.com/0uVYHfF.jpg" },
  { id: 4, naziv: "OPI Lak", slika: "https://i.imgur.com/d9qJ3AZ.jpg" }
];

// Slider komponenta
const Slider = ({ title, items }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-700 uppercase tracking-wider">{title}</h2>
      <div className="relative">
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-8 scrollbar-hide"
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-[200px] bg-white rounded-xl shadow-lg p-4 text-center">
              <img
                src={item.slika}
                alt={item.naziv}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold mb-2">{item.naziv}</h3>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">Naruči</button>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const proizvodi = [
    {
      naziv: "Chanel No. 5",
      slika: chanel,
      opis: "Ikonski miris s cvjetnim notama."
    },
    {
      naziv: "YSL Black Opium",
      slika: ysl,
      opis: "Zavodljiv i moderan parfem."
    },
    {
      naziv: "Dior J'adore",
      slika: dior,
      opis: "Elegantna ženstvenost u bočici."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-orange-100 min-h-screen py-16 px-8">
      {/* HERO SEKCIJA */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        
        {/* Lijevo - Top 3 parfema u koloni */}
        <div className="flex flex-col gap-6">
          {proizvodi.map((p, i) => (
            <div key={i} className="w-64 bg-white shadow-md rounded-xl p-4 text-center relative">
              <img 
                src={p.slika} 
                alt={p.naziv} 
                className="w-24 h-24 object-contain mx-auto -mt-12 mb-2"
              />
              <h3 className="text-lg font-semibold">{p.naziv}</h3>
              <p className="text-sm text-gray-500 mb-2">{p.opis}</p>
              <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600">Kupi</button>
            </div>
          ))}
        </div>

        {/* Desno - Velika hero slika */}
        <div className="flex-1">
          <img 
             style={{ backgroundImage: `url(${heroImage})` }} 
            alt="Hero banner" 
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Slider sekcije ispod */}
      <Slider title="Parfemi" items={parfemi} />
      <Slider title="Šminka" items={sminka} />
      <Slider title="Njega kože" items={njegaKoze} />
      <Slider title="Njega kose" items={kosa} />
      <Slider title="Njega noktiju" items={nokti} />
    </div>
  );
};

export default Home;
