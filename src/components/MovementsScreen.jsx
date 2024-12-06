import React, { useState } from 'react';
import '../styles/MovementsScreen.css';

const MovementsScreen = ({ navigate }) => {
  const [filter, setFilter] = useState('Todos');
  const movements = [
    { id: 1, type: 'Entrada', product: 'Transformador', quantity: 10, date: '2024-10-28', warehouse: 'Depósito 1', operator: 'Juan Pérez' },
    { id: 2, type: 'Salida', product: 'Cable', quantity: 5, date: '2024-10-29', warehouse: 'Depósito 2', operator: 'María López' },
    { id: 3, type: 'Entrada', product: 'Medidor', quantity: 8, date: '2024-10-30', warehouse: 'Depósito 3', operator: 'Carlos Ruiz' },
    { id: 4, type: 'Salida', product: 'Fusible', quantity: 3, date: '2024-11-01', warehouse: 'Depósito 1', operator: 'Ana Gómez' },
  ];

  const filteredMovements = movements.filter(
    (movement) => filter === 'Todos' || movement.type === filter
  );

  return (
    <div className="movements-container">
      {/* Encabezado */}
      <header className="movements-header">
        <h1>Historial de Movimientos</h1>
      </header>

      {/* Estadísticas rápidas */}
      <div className="statistics">
        <div className="stat-card">
          <h3>Total Movimientos</h3>
          <p>{movements.length}</p>
        </div>
        <div className="stat-card">
          <h3>Entradas</h3>
          <p>{movements.filter((m) => m.type === 'Entrada').length}</p>
        </div>
        <div className="stat-card">
          <h3>Salidas</h3>
          <p>{movements.filter((m) => m.type === 'Salida').length}</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="movements-filters">
        <button
          className={`filter-button ${filter === 'Todos' ? 'active' : ''}`}
          onClick={() => setFilter('Todos')}
        >
          Todos
        </button>
        <button
          className={`filter-button ${filter === 'Entrada' ? 'active' : ''}`}
          onClick={() => setFilter('Entrada')}
        >
          Entradas
        </button>
        <button
          className={`filter-button ${filter === 'Salida' ? 'active' : ''}`}
          onClick={() => setFilter('Salida')}
        >
          Salidas
        </button>
      </div>

      {/* Lista de movimientos */}
      <div className="movements-list">
        {filteredMovements.length > 0 ? (
          filteredMovements.map((movement) => (
            <div className={`movement-card ${movement.type.toLowerCase()}`} key={movement.id}>
              <div className="movement-info">
                <h3>{movement.type}</h3>
                <p><strong>Producto:</strong> {movement.product}</p>
                <p><strong>Cantidad:</strong> {movement.quantity}</p>
                <p><strong>Fecha:</strong> {movement.date}</p>
                <p><strong>Depósito:</strong> {movement.warehouse}</p>
                <p><strong>Operador:</strong> {movement.operator}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-movements">No hay movimientos registrados.</p>
        )}
      </div>

      {/* Barra de navegación */}
      <nav className="bottom-navigation">
        <button className="nav-button" onClick={() => navigate('summary')}>
          <span role="img" aria-label="Inicio">
            🏠
          </span>
          <p>Inicio</p>
        </button>
        <button className="nav-button active" onClick={() => navigate('movements')}>
          <span role="img" aria-label="Movimientos">
            🔄
          </span>
          <p>Movimientos</p>
        </button>
        <button className="nav-button" onClick={() => navigate('inventory')}>
          <span role="img" aria-label="Inventario">
            📦
          </span>
          <p>Inventario</p>
        </button>
        <button className="nav-button" onClick={() => navigate('purchase')}>
          <span role="img" aria-label="Compras">
            🛒
          </span>
          <p>Compras</p>
        </button>
      </nav>
    </div>
  );
};

export default MovementsScreen;
