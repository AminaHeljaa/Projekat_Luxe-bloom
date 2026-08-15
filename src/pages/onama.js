import React, { useState, useEffect } from "react";
import vrijednost6 from '../assets/vrijednost6.jpg';
import vrijednost5 from '../assets/vrijednost5.jpg';
import vrijednost7 from '../assets/vrijednost7.jpg';
import vrijednost9 from '../assets/vrijednost9.jpg';
import mi from '../assets/mi.jpg';
import mi1 from '../assets/mi1.jpg';
import bakir3 from '../assets/bakir3.jpg';

const ONama = () => {
  const tim = [
    {
      ime: "Amina Helja",
      pozicija: "Kreatorka koncepta",
      opis: "Amina vodi Luxe Bloom i brine o izboru parfema. Njeno znanje i iskustvo pomažu da svaki miris u ponudi bude kvalitetan, dugotrajan i prilagođen željama kupaca.",
      slika: mi1,
    },
    {
      ime: "Hana Karzić",
      pozicija: "Make-up artist",
      opis: "Hana je odgovorna za izbor šminke i vizualnu prezentaciju Luxe Blooma. Vodi računa da proizvodi budu kvalitetni, moderni i prilagođeni različitim stilovima, te da sve izgleda uredno i privlačno.",
      slika: mi,
    },
    {
      ime: "Bakir Sarajlić",
      pozicija: "Stručnjak za njegu kože",
      opis: "Bakir se brine o izboru proizvoda za njegu kože. Pazi da svaki proizvod bude siguran, kvalitetan i prilagođen različitim tipovima kože, kako bi kupci mogli lako pronaći ono što im odgovara.",
      slika: bakir3,
    },
  ];

  const vrijednostiSlike = [vrijednost6, vrijednost5, vrijednost7, vrijednost9];

  const [trenutnaSlikaIndex, setTrenutnaSlikaIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(false), 4000);

    const interval = setInterval(() => {
      setFade(true);
      setTrenutnaSlikaIndex((prevIndex) =>
        prevIndex === vrijednostiSlike.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [trenutnaSlikaIndex]);

  const sectionBgStyle = {
    background: "linear-gradient(to right, #FCE7F3, #FFEDD5)",
    paddingTop: "10px",
    paddingBottom: "64px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #FCE7F3, #FFEDD5)",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >

      {/* === Naš tim === */}
      <section style={sectionBgStyle}>
        <div style={{ maxWidth: "100%", overflowX: "auto", paddingBottom: "16px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#DB2777",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Naš tim
          </h2>
          <div
            style={{
              display: "flex",
              gap: "32px",
              padding: "0 20px",
              minWidth: "960px",
              justifyContent: "center",
            }}
          >
            {tim.map((clan, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "24px",
                  padding: "32px",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
                  width: "320px",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(219, 39, 119, 0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 25px rgba(0,0,0,0.12)")
                }
              >
                <img
                  src={clan.slika}
                  alt={clan.ime}
                  style={{
                    width: "230px",
                    height: "240px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "24px",
                  }}
                />
                <p
                  style={{
                    color: "#DB2777",
                    fontWeight: "700",
                    fontSize: "1.125rem",
                    marginBottom: "12px",
                  }}
                >
                  {clan.pozicija}
                </p>
                <p style={{ color: "#4B5563", fontSize: "1rem", lineHeight: "1.6" }}>
                  {clan.opis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Vrijednosti i kvalitet === */}
      <section style={sectionBgStyle}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(219, 39, 119, 0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 6px 25px rgba(0,0,0,0.12)")
          }
        >
          <div style={{ flex: "1 1 60%" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#DB2777", // roza naslov
                marginBottom: "24px",
              }}
            >
              Vrijednosti i kvalitet
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#4B5563",
                marginBottom: "20px",
                lineHeight: "1.65",
              }}
            >
              U Luxe Bloomu naš glavni cilj je da vam ponudimo proizvode visoke kvalitete koje možete koristiti
              sa poverenjem. Svaki parfem, komad šminke i proizvod za njegu pažljivo biramo kako bismo vam
              osigurali samo najbolje.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#4B5563",
                marginBottom: "20px",
                lineHeight: "1.65",
              }}
            >
              Svi naši proizvodi su originalni i dolaze od proverenih proizvođača, a pre nego što ih ponudimo,
              proveravamo njihovu sigurnost i efikasnost. Vaša sigurnost nam je na prvom mestu.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#4B5563",
                lineHeight: "1.65",
              }}
            >
              Verujemo da je jednostavna, pouzdana kupovina ključ zadovoljstva, zato smo tu da vam pružimo
              brzo i sigurno iskustvo – od izbora proizvoda do dostave na vašu adresu.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 40%",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={vrijednostiSlike[trenutnaSlikaIndex]}
              alt="Vrijednosti i kvalitet"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: fade ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          </div>
        </div>
      </section>

      {/* === Zašto baš mi? === */}
      <section style={sectionBgStyle}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
            transition: "box-shadow 0.3s ease",
            textAlign: "center",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(219, 39, 119, 0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 6px 25px rgba(0,0,0,0.12)")
          }
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#DB2777", // Roza boja
              marginBottom: "24px",
            }}
          >
            Zašto baš mi?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#4B5563", lineHeight: "1.6", margin: "0 auto" }}>
            U Luxe Bloomu vjerujemo da ljepota nije samo proizvod koji koristite, već i osjećaj koji vam
            pruža. Zato biramo samo one proizvode koje bismo i sami s povjerenjem koristili, bez ikakvih
            kompromisa. Naš tim je tu da vam bude podrška i saveznik u svakodnevnoj njezi i šminki, ne
            samo kao prodavači, već kao ljudi koji razumiju vaše potrebe. Nismo ovdje da vam samo ponudimo
            proizvode – želimo vas inspirisati, pomoći vam da se osjećate dobro i pružiti vam iskustvo
            kupovine koje će vas zaista usrećiti. Luxe Bloom nije samo brend, već vaša oaza pažnje,
            kvalitete i luksuza kojem se uvijek možete vratiti.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ONama;
