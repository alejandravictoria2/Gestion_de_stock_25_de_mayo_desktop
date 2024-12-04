import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegación
import '../styles/LoginScreen.css'; // Archivo CSS para estilos

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedUsername = 'admin';
    const hardcodedPassword = '1234';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate('/main-app'); // Navegar a la pantalla principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <img src="./assets/logo-mini.jpeg" alt="Logo" className="logo" />
      <h1 className="title">Cooperativa de Servicios Públicos 25 de Mayo Ltda.</h1>

      <div className="input-container">
        <i className="icon material-icons">account_circle</i>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>

      <div className="input-container">
        <i className="icon material-icons">lock</i>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>

      <button className="login-button" onClick={handleLogin}>
        Iniciar Sesión
      </button>

      <button className="link-button" onClick={() => navigate('/forgot-password')}>
        ¿Te olvidaste tu contraseña?
      </button>

      <button className="link-button" onClick={() => navigate('/register')}>
        Crear Usuario
      </button>
    </div>
  );
};

export default LoginScreen;
