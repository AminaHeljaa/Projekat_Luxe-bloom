import React, { useState } from 'react';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Dummy autentikacija:
  // admin: user=admin, pass=admin123
  // korisnik: bilo koje drugo korisničko ime i lozinka

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      login('admin', 'admin');
    } else {
      login(username, 'user');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-100 to-orange-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-10 shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-700">Prijava</h2>
        <label className="block mb-2 font-semibold">Korisničko ime</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Unesite korisničko ime"
        />
        <label className="block mb-2 font-semibold">Lozinka</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Unesite lozinku"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-semibold py-3 rounded hover:bg-pink-700 transition"
        >
          Prijavi se
        </button>
      </form>
    </div>
  );
};

export default Login;
