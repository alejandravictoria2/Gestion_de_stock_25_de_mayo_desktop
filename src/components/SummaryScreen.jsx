import React from 'react';
import '../styles/SummaryScreen.css';

const SummaryScreen = ({ navigate }) => {
  return (
    <div className="summary-container">
      {/* Botón de volver */}
      <button className="back-button" onClick={() => navigate('inventory')}>
        ← Volver
      </button>

      <h1 className="summary-title">Resumen</h1>

      {/* Contenido del resumen */}
      <div className="summary-content">
        <div className="summary-item">
          <h3>Total de Ventas</h3>
          <p>$50,000</p>
        </div>
        <div className="summary-item">
          <h3>Productos en Inventario</h3>
          <p>150</p>
        </div>
        <div className="summary-item">
          <h3>Depósitos Activos</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;

