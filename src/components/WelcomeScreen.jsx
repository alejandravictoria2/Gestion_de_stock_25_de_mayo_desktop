import React from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({ navigate }) => {
  return (
    <div className="container">
      {/* Título principal */}
      <h1 className="title">¡Bienvenido a la Gestión de Inventario!</h1>

      {/* Subtítulo descriptivo */}
      <p className="subtitle">Administra tus inventarios de forma rápida y sencilla</p>

      {/* Botón de navegación */}
      <button
        className="button"
        onClick={() => {
          console.log('Botón Empezar clickeado');
          navigate('login'); // Cambia la pantalla a "login"
        }}
      >
        Empezar
      </button>
    </div>
  );
};

export default WelcomeScreen;
