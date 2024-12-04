import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Logo de la aplicación */}
      <img src="../assets/logo.png" alt="Logo" className="logo" />
      {/* Texto de Bienvenida */}
      <h1 className="title">¡Bienvenido a la Gestión de Inventario!</h1>
      <p className="subtitle">Administra tus inventarios de forma rápida y sencilla</p>

      {/* Botón para entrar a la pantalla de inicio de sesión */}
      <button className="button" onClick={() => navigate('login')}>
        Empezar
      </button>
    </div>
  );
};

export default WelcomeScreen;
