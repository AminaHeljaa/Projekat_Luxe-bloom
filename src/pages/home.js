import React from 'react';
import heroImage from '../assets/pocetna3.jpg';
import chanel from '../assets/parfem1.png';
import ysl from '../assets/parfem3.png';
import dior from '../assets/parfem2.png';
import parfem4 from '../assets/parfem4.png';
import parfem5 from '../assets/parfem5.png';
import parfem6 from '../assets/parfem6.png';
import parfem7 from '../assets/parfem7.png';
import maybelline1 from '../assets/maybelline1-removebg-preview (1).png';
import loreal_ruz from '../assets/loreal_ruz-removebg-preview.png';
import nyxpaleta from '../assets/nyxpaleta-removebg-preview.png';
import revlon from '../assets/revlon-removebg-preview.png';
import nivea from '../assets/nivea-removebg-preview.png';
import garnier from '../assets/micelarna_voda-removebg-preview.png';
import serum from '../assets/The-Ordinary-Niacinamide-1-removebg-preview.png';
import cerave from '../assets/blemish-control-cleanser-front-LG-removebg-preview.png';
import glis from '../assets/gliss_sampon-removebg-preview.png';
import maska from '../assets/maska-removebg-preview.png';
import regenerator from '../assets/regenerator-removebg-preview.png';
import sprej from '../assets/sprej-removebg-preview.png';
import lak from '../assets/lak-removebg-preview.png';
import sally from '../assets/sally-removebg-preview.png';
import set from '../assets/set-removebg-preview.png';
import lakovi from '../assets/lakovi-removebg-preview.png';

import { ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";

const parfemi = [
  { id: 1, naziv: "Versace Bright Crystal", slika: parfem4 },
  { id: 2, naziv: "Tom Ford Black Orchid", slika: parfem5 },
  { id: 3, naziv: "Gucci Bloom", slika: parfem6 },
  { id: 4, naziv: "Lancome La Vie Est Belle", slika: parfem7 }
];

const sminka = [
  { id: 1, naziv: "Maybelline Maskara", slika: maybelline1 },
  { id: 2, naziv: "L'Oreal Ruž", slika: loreal_ruz },
  { id: 3, naziv: "NYX Paleta", slika: nyxpaleta },
  { id: 4, naziv: "Revlon Puder", slika: revlon }
];

const njegaKoze = [
  { id: 1, naziv: "Nivea Hidratantna Krema", slika: nivea },
  { id: 2, naziv: "Garnier Micelarna Voda", slika: garnier },
  { id: 3, naziv: "The Ordinary Serum", slika: serum },
  { id: 4, naziv: "Cerave Čistač", slika: cerave }
];

const kosa = [
  { id: 1, naziv: "Gliss Šampon", slika: glis },
  { id: 2, naziv: "L'Oreal Maska", slika: maska },
  { id: 3, naziv: "Pantene Regenerator", slika: regenerator },
  { id: 4, naziv: "Syoss Sprej", slika: sprej }
];

const nokti = [
  { id: 1, naziv: "Essie Lak", slika: lak },
  { id: 2, naziv: "Sally Hansen Tretman", slika: sally },
  { id: 3, naziv: "Golden Rose Set", slika: set },
  { id: 4, naziv: "OPI Lak", slika: lakovi }
];

const Slider = ({ title, items }) => {
  const scrollRef = React.useRef(null);
  const { addToCart } = useCart();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-700 uppercase tracking-wider">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 px-8 scrollbar-hide">
          {items.map((item) => (
            <div key={item.id} className="min-w-[200px] bg-white rounded-xl shadow-lg p-4 text-center">
              <img
                src={item.slika}
                alt={item.naziv}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-2">{item.naziv}</h3>
              <button
                onClick={(e) => {
                  e.currentTarget.classList.add("animate-bounce");
                  setTimeout(() => e.currentTarget.classList.remove("animate-bounce"), 300);
                }}
                className="bg-[#C8105D] hover:opacity-90 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Naruči
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const proizvodi = [
    {
      id: 1,
      naziv: 'Chanel No. 5',
      slika: parfem1,
      opis: 'Ikonski miris s cvjetnim notama.',
      cijena: 100, // EUR
    },
    {
      id: 2,
      naziv: "Dior J'adore",
      slika: parfem3,
      opis: 'Zavodljiv i moderan parfem.',
      cijena: 120,
    },
    {
      id: 3,
      naziv: 'YSL Black Opium',
      slika: parfem2,
      opis: 'Elegantna ženstvenost u bočici.',
      cijena: 110,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-orange-100 min-h-screen py-16 px-8 relative">
      <MiniKorpa />  {/* Ikona korpe na vrhu */}

      <h1
        className="text-5xl font-semibold text-[#C8105D] text-center mb-6 tracking-wide"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Zakoračite u svijet ljepote !
      </h1>

      {/* HERO SEKCIJA */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">

        {/* Lijevo - Top 3 proizvoda */}
        <div className="flex flex-col gap-6 items-start max-w-xs">
   <div
  className="w-fit px-6 py-3 rounded-lg mb-4
             bg-gradient-to-r from-[#f8b5c8] via-[#d24e7d] to-[#b33c6f]
             text-white shadow-md"
  style={{
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px solid rgba(210, 78, 125, 0.6)",
  }}
>
  <h2
    className="text-2xl font-bold tracking-wide"
    style={{ fontFamily: '"Times New Roman", Times, serif' }}
  >
    Top 3 najprodavanija <br />
    proizvoda
  </h2>
</div>



          {proizvodi.map((p, i) => (
            <div key={i} className="w-64 bg-white shadow-md rounded-xl p-4 text-center relative">
              <img
                src={p.slika}
                alt={p.naziv}
                className="w-24 h-24 object-contain mx-auto -mt-12 mb-2"
              />
              <h3 className="text-lg font-semibold">{p.naziv}</h3>
              <p className="text-sm text-gray-500 mb-2">{p.opis}</p>
              <button className="bg-[#C8105D] text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition">
                Kupi
              </button>
            </div>
          ))}
        </div>

  {/* Desna kolona: slika + dodatni pravougaonik ispod */}
  <div className="flex-1 flex flex-col gap-6">
    <img src={heroImage} alt="Hero banner" className="w-full h-[600px] object-cover shadow-lg rounded-xl" />

<div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 w-[880px] mx-auto mt-2">
  <div className="text-center">
    <h2 className="text-2xl font-bold text-pink-700 mb-4">
      Luxe Bloom — Tvoja oaza ljepote
    </h2>
    <p className="text-gray-700">
      Naša online parfumerija i kozmetički kutak donosi ti pažljivo odabrane proizvode vrhunskog kvaliteta. Otkrij mirise, njegu i makeup koji će istaći tvoju jedinstvenu ljepotu. Jer ti zaslužuješ da zablistaš svaki dan.
    </p>

    {/* Prazan prostor */}
    <div className="h-12"></div> {/* Visina oko 3 rem, možeš prilagoditi */}

    <p className="text-pink-700 font-semibold italic">
      U Luxe Bloom vjerujemo da ljepota počinje s tobom – zato biramo samo proizvode koji slave tvoju autentičnost.
      Zablistaj svakog dana !✨
    </p>
  </div>
</div>


  </div>
</div>


      <Slider title="Parfemi" items={parfemi} />
      <Slider title="Šminka" items={sminka} />
      <Slider title="Njega kože" items={njegaKoze} />
      <Slider title="Njega kose" items={kosa} />
      <Slider title="Njega noktiju" items={nokti} />
    </div>
  );
};

export default Home;
