import React from 'react';
import { createRoot } from 'react-dom/client';
import WelcomeScreen from './components/WelcomeScreen';

const navigate = (screen) => {
  console.log(`Navigating to ${screen}`);
};

// Seleccionar el contenedor raíz
const container = document.getElementById('root');

// Crear la raíz
if (container) {
  const root = createRoot(container);
  root.render(<WelcomeScreen navigate={navigate} />);

} else {
  console.error('No se encontró el contenedor #root en index.html');
}