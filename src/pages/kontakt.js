import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({ ime: "", email: "", poruka: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poslano:", formData);
    // Ovdje može ići POST na json-server
    alert("Poruka uspješno poslana!");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-display text-primary mb-6 text-center">Kontaktirajte nas</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Vaše ime"
          required
          className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email adresa"
          required
          className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Vaša poruka"
          required
          className="w-full border p-2 rounded"
          rows="5"
          onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
        ></textarea>
        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
          Pošalji
        </button>
      </form>

      <div className="mt-10">
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
  );
}

export default Kontakt;
