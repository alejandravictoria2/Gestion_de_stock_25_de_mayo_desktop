import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Importar pantallas
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import MovementHistoryScreen from './components/MovementHistoryScreen';
import AddMovementScreen from './components/AddMovementScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de bienvenida */}
        <Route path="/" element={<WelcomeScreen/>} />
        {/* Ruta de inicio de sesión */}
        <Route path="/login" element={<LoginScreen/>} />
        {/* Ruta del historial de movimientos */}
        <Route path="/movements" element={<MovementHistoryScreen/>} />
      </Routes>
    </Router>
  );
};

export default App;
