import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({ ime: "", email: "", poruka: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poslano:", formData);
    alert("Poruka uspješno poslana!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-300 via-pink-200 to-rose-400 flex items-center justify-center p-6">
      <div className="backdrop-blur-lg bg-white/60 p-10 rounded-3xl shadow-2xl max-w-2xl w-full">
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
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400"
              onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email adresa</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Poruka</label>
            <textarea
              placeholder="Vaša poruka"
              required
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-400"
              rows="6"
              onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
            ></textarea>
          </div>

          <button type="submit"
         style={{ backgroundColor: '#C8105D' }}
        className="w-full text-white font-semibold py-3 rounded-xl hover:opacity-90 transition duration-300"
        >
  Pošalji poruku
</button>

        </form>

        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Lokacija"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.826345992462!2d18.121!3d44.134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ead2a!2sKakanj!5e0!3m2!1sen!2sba!4v1680000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
