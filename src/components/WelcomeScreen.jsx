import React from 'react';
import '../styles/WelcomeScreen.css'; // Asegúrate de que el archivo CSS tenga los estilos

const WelcomeScreen = ({ navigate }) => {
  return (
    <div className="container">
      {/* Logo */}
      <img src="../assets/logo.png" alt="Logo" className="logo" />
      
      {/* Título */}
      <h1 className="title">¡Bienvenido a la Gestión de Inventario!</h1>
      
      {/* Subtítulo */}
      <p className="subtitle">Administra tus inventarios de forma rápida y sencilla</p>
      
      {/* Botón */}
      <button className="button" onClick={() => navigate('home')}>
        Empezar
      </button>
    </div>
  );
};

export default WelcomeScreen;
