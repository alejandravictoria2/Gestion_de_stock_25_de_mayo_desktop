import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Seleccionar el contenedor raíz en index.html
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
