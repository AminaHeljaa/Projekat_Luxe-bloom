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
import parfem8 from '../assets/parfem8.jpg';
import parfem9 from '../assets/parfem9.jpg';
import parfem10 from '../assets/parfem10.jpg';
import parfem11 from '../assets/parfem11.jpg';
import parfem12 from '../assets/parfem12.jpg';
import parfem13 from '../assets/parfem13.jpg';
import parfem14 from '../assets/parfem14.jpg';
import parfem15 from '../assets/parfem15.png';
import parfem16 from '../assets/parfem16.jpg';
import parfem17 from '../assets/parfem17.jpg';
import mackorektor from '../assets/mackorekor.jpg';
import maybellineeyeliner from '../assets/maybellineeyeliner.jpg';
import nyxruz from '../assets/nyxruz.jpg';
import maybellineblush from '../assets/maybellineblush.jpg';
import essencehighlighter from '../assets/essencehighlighter.jpg';
import loruz from '../assets/loruz.jpg';
import nyxpuder from '../assets/nyxpuder.jpg';
import carticebronzer from '../assets/carticebronzer.jpg';
import carticemaskara from '../assets/carticemaskara.jpg';
import rimelpaleta from '../assets/rimmelpaleta.jpg';
import larochekrema from '../assets/larochekrema.jpg';
import ceravelosion from '../assets/ceravelosion.jpg';
import biodermavoda from '../assets/biodermavoda.jpg';
import vichycistac from '../assets/vichycistac.jpg';
import neutrogenacistac from '../assets/neutrogenacistac.jpg';
import neutrogenagel from '../assets/neutrogenagel.jpg';
import cervakrema from '../assets/cervekrema.jpg';
import aloeveragel from '../assets/aloeveragel.jpg';
import baleahandkrema from '../assets/baleahandkrema.jpg';
import dovebodylosion from '../assets/dovebodylosion.jpg';
import lorealshampon from '../assets/lorealshapmon.jpg';
import kerastaseregenerator from '../assets/kerastaseregenerator.jpg';
import arganulje from '../assets/arganulje.jpg';
import herbaltimebalzam from '../assets/herbaltimebalzam.jpg';
import alfapartmaska from '../assets/alfapartmaska.jpg';
import baleapjena from '../assets/baleapjena.jpg';
import syoossprej from '../assets/syoossprej.jpg';
import garniermaska from '../assets/garniermaska.jpg';
import afroditasprej from '../assets/afroditasprej.jpg';
import moroccanoilregenerator from '../assets/moroccanoilregenerator.jpg';
import evelinelak from '../assets/evelinelak.jpg';
import goldenroseulje from '../assets/goldenroseulje.jpg';
import carticelakovi from '../assets/carticelakovi.jpg';
import goldenroselak from '../assets/goldenroselak.jpg';
import sallyhansenvitamin from '../assets/sallyhansenvitamin.jpg';
import opibaza from '../assets/opibaza.jpg';
import niveakrema from '../assets/niveakrema.jpg';
import auraulje from '../assets/auraulje.jpg';
import goldenrosegel from '../assets/goldenrosegel.jpg';
import claresaset from '../assets/claresaset.jpg'; 

import { ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";

const parfemi = [
  { id: 1, naziv: "Versace Bright Crystal", slika: parfem4},
  { id: 2, naziv: "Tom Ford Black Orchid", slika: parfem5 },
  { id: 3, naziv: "Gucci Bloom", slika: parfem6 },
  { id: 4, naziv: "Lancome La Vie Est Belle", slika: parfem7 },
  { id: 5, naziv: "Coco Chanel", slika: parfem8 },
  { id: 6, naziv: "Victor & Rolf Flowerbomb", slika : parfem9 },
  { id: 7, naziv: "Marc Jacob Daisy", slika :parfem10 },
  { id: 8, naziv: "Bvlgari Omnia Crystalline", slika: parfem11 },
  { id: 9, naziv: "Elie Saab Girl of Now", slika: parfem12 },
  { id: 10, naziv: "YSL Y Eau de Parfum", slika: parfem13 },
  { id: 11, naziv: "Prada Luna Rossa", slika: parfem14 },
  { id: 12, naziv: "Louis Vuitton Imagination", slika: parfem15 },
  { id: 13, naziv: "Loewe 001 Man", slika: parfem16 },
  { id: 14, naziv: "Valentino Voce Viva", slika: parfem17 }
];

const sminka = [
  { id: 1, naziv: "Maybelline Maskara", slika: maybelline1 },
  { id: 2, naziv: "L'Oreal Ruž", slika: loreal_ruz },
  { id: 3, naziv: "NYX Paleta", slika: nyxpaleta },
  { id: 4, naziv: "Revlon Puder", slika: revlon },
  { id: 5, naziv: "MAC Korektor", slika: mackorektor },
  { id: 6, naziv: "Maybelline Eyeliner ", slika: maybellineeyeliner},
  { id: 7, naziv: "NYX Ruž ", slika: nyxruz},
  { id: 8, naziv: "Maybelline Blush ", slika: maybellineblush},
  { id: 9, naziv: "Essence Hihglighter ", slika: essencehighlighter},
  { id: 10, naziv: "L'Oreal Ruž ", slika: loruz},
  { id: 11, naziv: "NYX Puder ", slika : nyxpuder},
  { id: 12, naziv: "Cartice Bronzer ", slika: carticebronzer},
  { id: 13, naziv: "Cartice Maskara ", slika: carticemaskara},
  { id: 14, naziv: "Rimmel Paleta ", slika: rimelpaleta}
];

const njegaKoze = [
  { id: 1, naziv: "Nivea Hidratantna Krema", slika: nivea },
  { id: 2, naziv: "Garnier Micelarna Voda", slika: garnier },
  { id: 3, naziv: "The Ordinary Serum", slika: serum },
  { id: 4, naziv: "CeraVe Čistač", slika: cerave },
  { id: 5, naziv: "La Roche-Posay krema ", slika: larochekrema },
  { id: 6, naziv: "CeraVe Losion ", slika: ceravelosion},
  { id: 7, naziv: "Bioderma Micelarna Voda ", slika: biodermavoda},
  { id: 8, naziv: "Vichy Čistač ", slika: vichycistac},
  { id: 9, naziv: "Neutrogena Čistač ", slika: neutrogenacistac},
  { id: 10, naziv: "Neutrogena Gel", slika: neutrogenagel},
  { id: 11, naziv: "CeraVe Krema ", slika: cervakrema},
  { id: 12, naziv: "Aloe Vera Gel ", slika: aloeveragel},
  { id: 13, naziv: "Balea Krema za Ruke ", slika: baleahandkrema},
  { id: 14, naziv: "Dove Body Losion ", slika: dovebodylosion}
];

const kosa = [
  { id: 1, naziv: "Gliss Šampon", slika: glis },
  { id: 2, naziv: "L'Oreal Maska", slika: maska },
  { id: 3, naziv: "Pantene Regenerator", slika: regenerator },
  { id: 4, naziv: "Syoss Sprej", slika: sprej },
  { id: 5, naziv: "L'Oreal šampon ", slika: lorealshampon},
  { id: 6, naziv: "Kerastase Regenerator ", slika: kerastaseregenerator},
  { id: 7, naziv: "Argan Ulje ", slika: arganulje},
  { id: 8, naziv: "Herbal Time Balzam ", slika: herbaltimebalzam},
  { id: 9, naziv: "Alfa Parf Milano Maska", slika: alfapartmaska},
  { id: 10, naziv: "Balea Pjena za Kosu ",slika: baleapjena},
  { id: 11, naziv: "Syoos Sprej ", slika: syoossprej},
  { id: 12, naziv: "Garnier Maska ", slika: garniermaska},
  { id: 13, naziv: "Afodita sprej ",slika: afroditasprej},
  { id: 14, naziv: "Moroccanoil regenerator", slika: moroccanoilregenerator}
];

const nokti = [
  { id: 1, naziv: "Essie Lak", slika: lak },
  { id: 2, naziv: "Sally Hansen Tretman", slika: sally },
  { id: 3, naziv: "Golden Rose Set", slika: set },
  { id: 4, naziv: "OPI Lak", slika: lakovi },
  { id: 5, naziv: "Eveline Lak ", slika: evelinelak},
  { id: 6, naziv: "Golden Rose ulje ",slika: goldenroseulje},
  { id: 7, naziv: "Cartice lak ", slika: carticelakovi},
  { id: 8, naziv: "Golden Rose Lak ", slika: goldenroselak},
  { id: 9, naziv: "Sally Hansen Vitamin ", slika: sallyhansenvitamin},
  { id: 10, naziv: "OPI Baza za Nokte ", slika : opibaza},
  { id: 11, naziv: "Nivea Krema ", slika: niveakrema},
  { id: 12, naziv: "AURA Ulje ", slika : auraulje},
  { id: 13, naziv: "Golden Rose Gel", slika: goldenrosegel},
  { id: 14, naziv: "Claresa Set ", slika: claresaset}
];

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
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 px-8 scrollbar-hide">
          {items.map((item) => (
            <div key={item.id} className="min-w-[200px] h-80 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between text-center">
              <img
                src={item.slika}
                alt={item.naziv}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold mb-2">{item.naziv}</h3>
              <div className="flex-grow" />
              <button
                onClick={(e) => {
                  e.currentTarget.classList.add("animate-bounce");
                  setTimeout(() => e.currentTarget.classList.remove("animate-bounce"), 300);
                }}
                className="bg-[#C8105D] hover:opacity-90 text-white px-4 py-2 rounded-full text-sm transition mt-2"
              >
                Naruči
              </button>
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
      naziv: "Dior J'adore",
      slika: dior,
      opis: "Zavodljiv i moderan parfem."
    },
    {
      naziv: "YSL Black Opium",
      slika: ysl,
      opis: "Elegantna ženstvenost u bočici."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-orange-100 min-h-screen py-16 px-8">
      {/* NASLOV IZNAD HERO SLIKE */}
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

        {/* Desno - Hero slika bez radiusa i veća */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hero banner"
            className="w-full h-[600px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Slajder sekcije */}
      <Slider title="Parfemi" items={parfemi} />
      <Slider title="Šminka" items={sminka} />
      <Slider title="Njega kože" items={njegaKoze} />
      <Slider title="Njega kose" items={kosa} />
      <Slider title="Njega noktiju" items={nokti} />
    </div>
  );
};

export default Home;
