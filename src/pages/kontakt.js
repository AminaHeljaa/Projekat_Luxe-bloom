import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({ ime: "", email: "", poruka: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ime: formData.ime,
          email: formData.email,
          tekst: formData.poruka,
          datum: new Date()
        }),
      });

      if (response.ok) {
        setStatus("✅ Poruka je uspješno poslata!");
        setFormData({ ime: "", email: "", poruka: "" }); // reset forme
      } else {
        throw new Error("Greška pri slanju poruke");
      }
    } catch (error) {
      setStatus("❌ Došlo je do greške, pokušajte ponovo.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-orange-100 flex flex-col items-center justify-center py-10 px-4 sm:px-8">
      <div className="backdrop-blur-lg bg-white/70 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-xl w-full">
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: '#C8105D' }}
        >
          Kontaktirajte nas
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Ime i prezime</label>
            <input
              type="text"
              placeholder="Vaše ime"
              required
              value={formData.ime}
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email adresa</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Poruka</label>
            <textarea
              placeholder="Vaša poruka"
              required
              value={formData.poruka}
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              rows="5"
              onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#C8105D' }}
            className="w-full text-white font-semibold py-3 rounded-xl hover:opacity-90 transition duration-300"
          >
            Pošalji poruku
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center font-medium text-lg text-gray-800">
            {status}
          </p>
        )}

        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Lokacija"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.826345992462!2d18.121!3d44.134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ead2a!2sKakanj!5e0!3m2!1sen!2sba!4v1680000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
