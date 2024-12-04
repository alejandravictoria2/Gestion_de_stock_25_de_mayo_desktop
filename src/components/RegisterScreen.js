import React, { useState } from 'react';
import './RegisterScreen.css';

const RegisterScreen = ({ navigateBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Simulación de guardar usuario
    alert(`Usuario ${username} registrado con éxito`);
    navigateBack(); // Regresa a la pantalla anterior
  };

  return (
    <div className="container">
      <h1 className="title">Crear Usuario</h1>

      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />

      <input
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input"
      />

      <button className="button" onClick={handleRegister}>
        Registrar
      </button>
    </div>
  );
};

export default RegisterScreen;
