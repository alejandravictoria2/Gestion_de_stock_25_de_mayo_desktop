import React, { useState } from 'react';
import './ForgotPasswordScreen.css'; // Archivo CSS para estilos

const ForgotPasswordScreen = ({ navigateBack }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email) {
      alert('Por favor ingresa tu correo electrónico.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar un correo de recuperación
    alert('Recuperación de Contraseña: Se han enviado instrucciones a tu correo.');
    navigateBack(); // Regresa a la pantalla anterior
  };

  return (
    <div className="container">
      <h1 className="title">Recuperar Contraseña</h1>

      <div className="input-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>

      <button className="button" onClick={handleForgotPassword}>
        Enviar Instrucciones
      </button>
    </div>
  );
};

export default ForgotPasswordScreen;
