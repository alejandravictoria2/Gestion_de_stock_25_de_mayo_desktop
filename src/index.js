import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import WelcomeScreen from './components/WelcomeScreen'; // Asegúrate de que WelcomeScreen exista
import './styles/WelcomeScreen.css'; // Asegúrate de que los estilos existan

// Función de navegación simulada
const navigate = (screen) => {
  console.log(`Navigating to: ${screen}`);
};

// Selecciona el contenedor principal
const container = document.getElementById('root'); // Esto busca el contenedor "root" en index.html

// Crea la raíz de React
const root = createRoot(container);

// Renderiza la aplicación
root.render(<WelcomeScreen navigate={navigate} />);
