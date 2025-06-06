import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import reklama1 from '../assets/reklama1.jpg';
import reklama2 from '../assets/reklama2.jpg';
import reklama3 from '../assets/reklama3.jpg';


const reklame = [
  {
    id: 1,
    slika: reklama1,
    tekst: "Iskoristite -15% popusta na parfeme!",
  },
  {
    id: 2,
    slika: reklama2,
    tekst: "Ekskluzivni setovi parfema na sniženju!",
  },
  {
    id: 3,
    slika: reklama3,
    tekst: "Nagradna igra i pokloni",
  },
  
];


const Korpa = () => {
  const { cartItems, setCartItems } = useCart();
  const [items, setItems] = useState(cartItems || []);
  const [isHovering, setIsHovering] = useState(false);

  // Animacija riječi za naslov
  const rijeci = [
    "proizvode za njegu",
    "parfeme",
    "šminku",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rijeci.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setItems(cartItems || []);
  }, [cartItems]);

  const handleQuantityChange = (id, novaKolicina) => {
    if (novaKolicina < 1) return;
    const azurirani = items.map((item) =>
      item.id === id ? { ...item, quantity: novaKolicina } : item
    );
    setItems(azurirani);
    setCartItems(azurirani);
  };

  const handleRemoveItem = (id) => {
    const azurirani = items.filter((item) => item.id !== id);
    setItems(azurirani);
    setCartItems(azurirani);
  };

  const ukupno = items.reduce(
    (sum, item) => sum + Number(item.cijena) * item.quantity,
    0
  );

  const naruci = () => {
    alert("Hvala na narudžbi!");
    // Ovdje možeš dodati slanje narudžbe na backend ili sl.
  };

  return (
    <div
      style={{
          minHeight: "100vh",
          paddingInline: "15%",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          background: "linear-gradient(to right, #FCE7F3, #FFEDD5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
      }}
    >
      {/* Naslov sa fiksiranim "Naručite" */}
      <h1
        style={{
          textAlign: "center",
          marginTop: 60,
          marginBottom: 50,
          fontWeight: "bold",
          fontSize: "3rem",
          transition: "opacity 0.5s ease",
          opacity: fade ? 1 : 0,
        }}
      >
        <span style={{ color: "#000" }}>Naručite </span>
        <span style={{ color: "#D6336C" }}>{rijeci[index]}</span>
      </h1>
      
<div
  style={{
    display: "flex",
    overflowX: "auto",
    gap: 20,
    paddingBottom: 20,
    marginBottom: 40,
  }}
>
  {reklame.map(({ id, slika, tekst }) => (
    <div
      key={id}
      style={{
        minWidth: 180,
        backgroundColor: "#fff0f6",
        borderRadius: 12,
        boxShadow: "0 4px 8px rgba(200,0,70,0.2)",
        padding: 12,
        flexShrink: 0,
        cursor: "pointer",
        userSelect: "none",
        textAlign: "center",
      }}
      onClick={() => alert(`Kliknuli ste na reklamu: ${tekst}`)}
    >
      <img
        src={slika}
        alt={tekst}
        style={{
          width: "100%",
          borderRadius: 8,
          marginBottom: 8,
          objectFit: "cover",
          height: 300,
        }}
      />
      <p style={{ color: "#C8105D", fontWeight: "bold", fontSize: 14 }}>
        {tekst}
      </p>
    </div>
  ))}
</div>


      <h2 style={{ marginBottom: 20, color: "#D6336C" }}>
        <FaShoppingCart /> Vaša korpa
      </h2>

      {items.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 20,
            color: "#777",
            fontWeight: "bold",
            marginBottom: 50
          }}
        >
          Vaša korpa je trenutno prazna!
        </p>
      ) : (
        items.map((item) => {
          const cijenaNum = Number(item.cijena);
          return (
            <div
              key={item.id}
              style={{
                background: "#fff",
                padding: 16,
                borderRadius: 12,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <img
                src={item.slika}
                alt={item.naziv}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: 4 }}>{item.naziv}</h3>
                <p style={{ fontSize: 14, color: "#666" }}>{item.opis}</p>
                <p>Cijena: {cijenaNum.toFixed(2)} EUR</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  minWidth: 200,
                }}
              >
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  style={{
                    cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: item.quantity <= 1 ? "#eee" : "#fff",
                    fontWeight: "bold",
                  }}
                >
                  -
                </button>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= 1) {
                      handleQuantityChange(item.id, val);
                    }
                  }}
                  style={{
                    width: 60,
                    padding: "4px 8px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    textAlign: "center",
                  }}
                />

                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  style={{
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "4px",
                    border: "1px solid #C8105D",
                    backgroundColor: "#C8105D",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  Izbriši
                </button>
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#C8105D",
                  minWidth: 100,
                  textAlign: "right",
                }}
              >
                {(cijenaNum * item.quantity).toFixed(2)} EUR
              </p>
            </div>
          );
        })
      )}

      {items.length > 0 && (
        <>
          <div
            style={{
              textAlign: "right",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 20,
              color: "#C8105D",
            }}
          >
            Ukupno: {ukupno.toFixed(2)} EUR
          </div>

          <div style={{ textAlign: "center", marginTop: 30, marginBottom:50}}>
            <button
              onClick={naruci}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                backgroundColor: isHovering ? "#B02B57" : "#D6336C",
                color: "#fff",
                border: "none",
                padding: "12px 40px",
                borderRadius: 30,
                fontWeight: "bold",
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(214,51,108,0.5)",
                transition: "background-color 0.3s",
              }}
            >
              Naruči
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Korpa;