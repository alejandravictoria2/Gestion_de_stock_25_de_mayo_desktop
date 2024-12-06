import React, { useState } from 'react';
import '../styles/SummaryScreen.css';

const SummaryScreen = ({ navigate }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3); // Número de notificaciones pendientes
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'Compra', detail: 'Se compraron 50 unidades de Producto X.' },
    { id: 2, type: 'Movimiento', detail: 'Entrada de 100 unidades al Depósito 1.' },
    { id: 3, type: 'Venta', detail: 'Se vendieron 20 unidades de Producto Y.' },
  ]);

  // Alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Limpiar las notificaciones
  const clearNotifications = () => {
    setNotifications(0); // Deja en cero las notificaciones
  };

  return (
    <div className={`summary-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Encabezado */}
      <header className="summary-header">
        <h1>Gestión de Inventario</h1>
        <div className="header-controls">
          <button
            className="notification-icon"
            onClick={clearNotifications} // Limpiar notificaciones al hacer clic
          >
            🔔
            {notifications > 0 && (
              <span className="notification-badge">{notifications}</span>
            )}
          </button>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </div>
      </header>

      {/* Título */}
      <h1 className="summary-title">Resumen de Gestión</h1>
      <p className="summary-subtitle">Revisa las métricas clave y accede a las funciones principales.</p>

      {/* Resumen visual */}
      <div className="summary-cards">
        <div className="card" onClick={() => navigate('inventory')}>
          <div className="card-icon">📦</div>
          <h3>Productos</h3>
          <p>200</p>
        </div>
        <div className="card" onClick={() => navigate('movements')}>
          <div className="card-icon">🔄</div>
          <h3>Movimientos</h3>
          <p>50 este mes</p>
        </div>
        <div className="card" onClick={() => navigate('purchase')}>
          <div className="card-icon">🛒</div>
          <h3>Compras</h3>
          <p>$10,000</p>
        </div>
      </div>

      {/* Actividad reciente */}
      <div className="recent-activities">
        <h2>Actividad Reciente</h2>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <strong>{activity.type}: </strong>
              {activity.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Pie de página */}
      <footer className="summary-footer">
        <p>© 2024 Gestión de Inventario. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SummaryScreen;
