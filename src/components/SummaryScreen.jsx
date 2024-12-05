import React from 'react';
import '../styles/SummaryScreen.css';

const SummaryScreen = ({ navigate }) => {
  return (
    <div className="summary-container">
      <h1 className="summary-title">Resumen</h1>

      {/* Sección de Gráficos */}
      <div className="chart">
        <h2>Niveles de Inventario por Categoría</h2>
        <div className="chart-placeholder">[Gráfico de Barras]</div>
      </div>

      <div className="chart">
        <h2>Ventas Mensuales</h2>
        <div className="chart-placeholder">[Gráfico de Líneas]</div>
      </div>

      <div className="chart">
        <h2>Distribución de Inventario por Categoría</h2>
        <div className="chart-placeholder">[Gráfico de Pastel]</div>
      </div>

      {/* Botón para ir al Inventario */}
      <button
        className="navigate-button"
        onClick={() => navigate('inventory')}
      >
        Ir al Inventario
      </button>
    </div>
  );
};

export default SummaryScreen;
