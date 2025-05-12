import React, { useState } from "react";

const Prijava = () => {
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj logiku za prijavu
    console.log("Prijavljen sa:", email);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Prijava</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="lozinka" className="block text-sm font-medium text-gray-600">
              Lozinka
            </label>
            <input
              type="password"
              id="lozinka"
              value={lozinka}
              onChange={(e) => setLozinka(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Prijavi se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prijava;
