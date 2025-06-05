import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const MiniKorpa = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 0) return null; // Ne prikazuj ništa ako je prazno

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        backgroundColor: '#D6336C',
        color: 'white',
        borderRadius: '50px',
        padding: '10px 20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 10px rgba(214,51,108,0.5)',
        zIndex: 1000,
      }}
      onClick={() => alert('Idi u korpu')}
    >
      <FaShoppingCart size={24} />
      <span>{totalQuantity} proizvod(a) u korpi</span>
    </div>
  );
};

export default MiniKorpa;
