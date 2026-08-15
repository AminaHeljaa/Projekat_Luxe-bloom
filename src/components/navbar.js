import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ korisnik, onLogout }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const activeClass = (path) =>
    location.pathname === path
      ? 'relative text-pink-700 font-semibold'
      : 'text-gray-700 hover:text-pink-600';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-3 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Luxe Bloom Logo" className="w-7 h-7" />
          <span className="select-none font-serif text-gray-800 text-lg">Luxe Bloom</span>
        </div>

        <ul className="hidden md:flex space-x-8 font-medium text-sm">
          {[{ label: 'Početna', path: '/' }, { label: 'O nama', path: '/o-nama' }, { label: 'Kontakt', path: '/kontakt' }, { label: 'Korpa', path: '/korpa' },
          ...(korisnik?.uloga === 'admin' ? [{ label: 'Admin', path: '/admin' }] : [])].map(({ label, path }) => (
            <li key={path} className="relative group">
              <Link to={path} className={activeClass(path)}>
                {label}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink-600 transition-all duration-300 ease-in-out ${location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {korisnik ? (
            <>
              <FaUserCircle size={24} className="text-pink-600" />
              <span className="hidden md:inline text-gray-700 font-medium">{korisnik.korisnickoIme}</span>
              <button onClick={onLogout} className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition">
                Odjava
              </button>
            </>
          ) : (
            <Link to="/prijava" className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition">
              Prijava
            </Link>
          )}
        </div>

        <button className="md:hidden text-pink-700 focus:outline-none" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {open && (
          <ul className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col space-y-2 p-4 md:hidden">
            {[{ label: 'Početna', path: '/' }, { label: 'O nama', path: '/o-nama' }, { label: 'Kontakt', path: '/kontakt' }, { label: 'Korpa', path: '/korpa' },
            ...(korisnik?.uloga === 'admin' ? [{ label: 'Admin', path: '/admin' }] : [])].map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className="block text-gray-700 hover:text-pink-600" onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
            {korisnik ? (
              <li>
                <button onClick={() => { onLogout(); setOpen(false); }} className="w-full text-left text-red-600 hover:text-red-800">
                  Odjava
                </button>
              </li>
            ) : (
              <li>
                <Link to="/prijava" className="block text-pink-600 font-semibold" onClick={() => setOpen(false)}>
                  Prijava
                </Link>
              </li>
            )}
          </ul>
        )}
      </nav>

      <div className="h-16" />
    </>
  );
};

export default Navbar;
