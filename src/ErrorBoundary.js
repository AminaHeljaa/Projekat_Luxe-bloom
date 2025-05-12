// src/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Ažuriraj stanje kako bi se prikazao fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Loguj greške za debagovanje
    console.error("Error captured in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Možeš prikazati fallback UI
      return <h1>Nešto je pošlo po zlu. Pokušaj ponovo kasnije.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
