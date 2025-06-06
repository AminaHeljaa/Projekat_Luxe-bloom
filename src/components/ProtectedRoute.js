import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ korisnik, adminOnly, children }) => {
  if (!korisnik) {
    // Nije prijavljen - preusmjeri na prijavu
    return <Navigate to="/prijava" replace />;
  }

  if (adminOnly && korisnik.uloga !== 'admin') {
    // Nije admin
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
