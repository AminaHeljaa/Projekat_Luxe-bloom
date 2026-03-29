
import React, { useState } from "react";
import AdminDodajProizvod from "./AdminDodajProizvod";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [poruka, setPoruka] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      setPoruka("");
    } catch (err) {
      setPoruka(err.response?.data?.error || "Greška pri logovanju.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Luxe Bloom</h1>

      {!user ? (
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl mb-2">Login</h2>
          {poruka && <p className="text-red-600">{poruka}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Lozinka"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Prijavi se
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">
            {(user.username === "Hana" || user.username === "Amina")
              ? "Dobrodošla"
              : "Dobrodošao"} {user.username}
            {user.isAdmin && " (admin)"}
          </h2>
          <button
            onClick={handleLogout}
            className="mb-6 bg-red-500 text-white py-1 px-4 rounded"
          >
            Odjavi se
          </button>

          {user.isAdmin && <AdminDodajProizvod token={token} />}
        </div>
      )}
    </div>
  );
}

export default App;


export default App;
