import React, { useState } from 'react';
import '../styles/LoginScreen.css'; // Estilos para LoginScreen

const LoginScreen = ({ navigate }) => {
  // Estados para los campos de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Manejo del inicio de sesión
  const handleLogin = () => {
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    if (username && password) {
      // Aquí puedes añadir lógica para validar las credenciales
      console.log('Iniciando sesión...');
      navigate('summary'); // Navegar a la pantalla de resumen
    } else {
      alert('Por favor, ingresa tu usuario y contraseña.');
    }
  };

  return (
    <div className="container">
      {/* Título */}
      <h1 className="title">Cooperativa de Servicios Públicos 25 de Mayo Ltda.</h1>

      {/* Formulario de inicio de sesión */}
      <div className="form">
        <div className="input-group">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>

      {/* Enlaces */}
      <p className="links">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <br />
        <a href="#">Crear Usuario</a>
      </p>
    </div>
  );
};

export default LoginScreen;

