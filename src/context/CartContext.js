import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const MAX_QUANTITY = 10; // maksimalno dozvoljena količina po proizvodu

  const addToCart = (proizvod) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === proizvod.id);
      if (existing) {
        if (existing.quantity >= MAX_QUANTITY) {
          // ako je već dostignut max broj, ne dodaj više
          return prev;
        }
        return prev.map(item =>
          item.id === proizvod.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...proizvod, quantity: 1 }];
    });
  };

  // Funkcija za smanjenje količine proizvoda (min 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) => 
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Funkcija za uklanjanje proizvoda iz korpe
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // Funkcija za direktno postavljanje količine proizvoda (koristi za input broj)
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // minimalno 1
    if (quantity > MAX_QUANTITY) quantity = MAX_QUANTITY;
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
