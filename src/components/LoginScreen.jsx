import React, { useState } from 'react';
import '../styles/LoginScreen.css';

const LoginScreen = ({ navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigate('summary'); // Navegar al resumen si las credenciales son correctas
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCreateUser = () => {
    setShowCreateUserModal(true);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Ingresar
      </button>
      <div className="login-options">
        <button onClick={handleForgotPassword} className="option-button">
          ¿Olvidaste tu contraseña?
        </button>
        <button onClick={handleCreateUser} className="option-button">
          Crear usuario
        </button>
      </div>

      {/* Modal para "¿Olvidaste tu contraseña?" */}
      {showForgotPasswordModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Olvidaste tu contraseña?</h3>
            <p>Por favor, ingresa tu correo electrónico para restablecer tu contraseña.</p>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="modal-input"
            />
            <button
              className="modal-button"
              onClick={() => {
                alert('Instrucciones enviadas a tu correo electrónico.');
                setShowForgotPasswordModal(false);
              }}
            >
              Enviar
            </button>
            <button
              className="modal-close"
              onClick={() => setShowForgotPasswordModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal para "Crear usuario" */}
      {showCreateUserModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Crear Usuario</h3>
            <p>Completa los campos para registrar un nuevo usuario.</p>
            <input type="text" placeholder="Nombre de usuario" className="modal-input" />
            <input type="email" placeholder="Correo electrónico" className="modal-input" />
            <input type="password" placeholder="Contraseña" className="modal-input" />
            <button
              className="modal-button"
              onClick={() => {
                alert('Usuario creado exitosamente.');
                setShowCreateUserModal(false);
              }}
            >
              Registrar
            </button>
            <button
              className="modal-close"
              onClick={() => setShowCreateUserModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
