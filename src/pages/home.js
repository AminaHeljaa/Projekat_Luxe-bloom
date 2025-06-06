import React, { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/pocetna3.jpg';
import { parfemi, sminka, njegaKoze, njegaKose, njegaNokti } from './proizvodi';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import parfem1 from '../assets/parfem1.png';
import parfem2 from '../assets/parfem2.png';
import parfem3 from '../assets/parfem3.png';
import { useCart } from '../context/CartContext';
import MiniKorpa from '../components/MiniKorpa';
import '../index.css';

const EUR_TO_KM = 1.95583; // Kurs EUR -> KM

const Slider = ({ title, items }) => {
  const scrollRef = useRef(null);
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
            <div
              key={item.id}
              className="group min-w-[220px] h-96 bg-white rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(200,16,93,0.4)]"
            >
              <img
                src={item.slika}
                alt={item.naziv}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-1">{item.naziv}</h3>
              <p className="text-sm text-gray-500 mb-1">{item.opis}</p>
              <p className="text-md font-bold text-pink-600">
                {(item.cijena * EUR_TO_KM).toFixed(2)} KM
              </p>
              <button
                onClick={() => addToCart(item)}
                className="bg-gradient-to-r from-[#C8105D] to-[#FF5C8D] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:brightness-110 transition transform hover:-translate-y-1 hover:scale-105"
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
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const topProizvodi = [
    {
      id: 1,
      naziv: 'Chanel No. 5',
      slika: parfem1,
      opis: 'Ikonski miris s cvjetnim notama.',
      cijena: 100,
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
      <MiniKorpa />

      <h1
        className="text-5xl font-semibold text-[#C8105D] text-center mb-6 tracking-wide"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Zakoračite u svijet ljepote !
      </h1>

      <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
        {/* Lijeva kolona */}
        <div className="flex flex-col gap-6 items-start max-w-xs">
          <div
            className="w-fit px-6 py-3 rounded-lg mb-4
                       bg-gradient-to-r from-[#f8b5c8] via-[#d24e7d] to-[#b33c6f]
                       text-white shadow-md"
            style={{
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(210, 78, 125, 0.6)',
            }}
          >
            <h2 className="text-2xl font-bold tracking-wide" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              Top 3 najprodavanija <br /> proizvoda
            </h2>
          </div>

          {topProizvodi.map((p) => (
            <div
              key={p.id}
              className="group w-64 bg-white rounded-2xl p-5 text-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(200,16,93,0.4)]"
            >
              <img
                src={p.slika}
                alt={p.naziv}
                className="w-24 h-24 object-contain mx-auto -mt-12 mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-1">{p.naziv}</h3>
              <p className="text-sm text-gray-500 mb-3">{p.opis}</p>
              <p className="text-md font-bold text-pink-600 mb-3">
                {(p.cijena * EUR_TO_KM).toFixed(2)} KM
              </p>
              <button
                onClick={() => addToCart(p)}
                className="bg-gradient-to-r from-[#C8105D] to-[#FF5C8D] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition transform hover:-translate-y-1 hover:scale-105"
              >
                Naruči
              </button>
            </div>
          ))}
        </div>

        {/* Desna kolona */}
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

              <div className="h-12"></div>

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
      <Slider title="Njega kose" items={njegaKose} />
      <Slider title="Njega noktiju" items={njegaNokti} />
      
     <div className="w-full max-w-5xl mx-auto mt-20 mb-10 bg-white rounded-3xl border border-pink-300 shadow-md px-8 py-10
  transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(200,16,93,0.4)]">
  <h2 className="text-2xl font-bold text-pink-700 text-center mb-6 tracking-wide">
    Pratite nas na društvenim mrežama 
  </h2>

  <div className="flex justify-center gap-12 text-[#C8105D] text-lg font-medium mb-6">
    <a
      href="https://instagram.com/luxebloom"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-pink-500 transition-transform transform hover:scale-110"
    >
      📸 Instagram
    </a>
    <a
      href="https://facebook.com/luxebloom"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-pink-500 transition-transform transform hover:scale-110"
    >
      👍 Facebook
    </a>
    <a
      href="https://twitter.com/luxebloom"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="hover:text-pink-500 transition-transform transform hover:scale-110"
    >
      🐦 Twitter
    </a>
  </div>

  <p className="text-sm text-gray-500 text-center">
    © {new Date().getFullYear()} Luxe Bloom. Sva prava zadržana.
  </p>
</div>


    </div>

  );
};




export default Home;
