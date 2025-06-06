import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

import novo1 from "../assets/novo1.jpg";
import novo2 from "../assets/novo2.jpg";
import novo3 from "../assets/novo3.jpg";
import novo4 from "../assets/novo4.jpg";
import novo5 from "../assets/novo5.jpg";
import novo6 from "../assets/novo6.jpg";
import novo7 from "../assets/novo7.jpg";
import novo8 from "../assets/novo8.jpg";

const Korpa = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const rijeci = ["parfeme", "šminku", "tretmane", "kozmetiku", "proizvode za njegu"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rijeci.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        paddingBottom: "120px",
        background: "linear-gradient(to right, #FCE7F3, #FFEDD5)",
      }}
    >
      <div style={{ paddingTop: "80px" }}></div>

      {/* Slogan */}
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          whiteSpace: "nowrap",
          fontSize: "48px",
          paddingInline: "15%",
        }}
      >
        <span style={{ width: 180, textAlign: "right" }}>Naručite</span>
        <span
          style={{
            color: "#D6336C",
            transition: "opacity 0.5s ease",
            opacity: fade ? 1 : 0,
            width: 300,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {rijeci[index]}
        </span>
      </div>

      <p
        style={{
          marginTop: "15px",
          fontSize: "22px",
          fontWeight: "600",
          color: "#D6336C",
          paddingInline: "15%",
        }}
      >
        Brza dostava i kvalitet koji zaslužujete
      </p>

      {/* SLIDER */}
      <div style={{ paddingInline: "15%", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "10px",
            scrollBehavior: "smooth",
          }}
        >
          {[
            { id: 1, src: novo1, alt: "proizvod1" },
            { id: 2, src: novo2, alt: "proizvod2" },
            { id: 3, src: novo3, alt: "proizvod3" },
            { id: 4, src: novo4, alt: "proizvod4" },
            { id: 5, src: novo5, alt: "proizvod5" },
            { id: 6, src: novo6, alt: "proizvod6" },
            { id: 7, src: novo7, alt: "proizvod7" },
            { id: 8, src: novo8, alt: "proizvod8" },
          ].map((slika) => (
            <div
              key={slika.id}
              style={{
                minWidth: "200px",
                flexShrink: 0,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                background: "#fff",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={slika.src}
                alt={slika.alt}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                  display: "block",
                }}
              />
              <div style={{ padding: "10px", textAlign: "center" }}>
                <button
                  style={{
                    backgroundColor: "#D6336C",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => addToCart(slika)}
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rozi okvir */}
      <div
        style={{
          margin: "60px auto 50px",
          width: "80%",
          border: "5px solid #ffc2d6",
          borderRadius: "10px",
          color: "#d6336c",
          padding: "16px 24px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          fontSize: "20px",
          gap: "10px",
          backgroundColor: "#fff",
        }}
      >
        <FaShoppingCart />
        Korpa
      </div>

      {/* Prazna korpa poruka */}
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "20px", color: "#777", fontWeight: "bold" }}>
            Vaša korpa je trenutno prazna!
          </p>
        </div>
      ) : (
        // Ovdje možeš dodati prikaz proizvoda u korpi, npr. mapiranje cart-a
        <div style={{ paddingInline: "15%", marginTop: "20px" }}>
          {cart.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                background: "#fff",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div>{item.alt}</div>
              <button
                style={{
                  backgroundColor: "#d6336c",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => removeFromCart(item)}
              >
                Ukloni
              </button>
            </div>
          ))}
          <button
            style={{
              backgroundColor: "#d6336c",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={clearCart}
          >
            Očisti korpu
          </button>
        </div>
      )}
    </div>
  );
};

export default Korpa;
