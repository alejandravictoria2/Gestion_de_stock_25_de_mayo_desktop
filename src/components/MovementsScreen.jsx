import React, { useState } from 'react';
import '../styles/MovementsScreen.css';

const MovementsScreen = ({ navigate }) => {
  const [filter, setFilter] = useState('Todos'); // Estado para el filtro seleccionado

  const movementsData = [
    { id: 1, type: 'Entrada', item: 'Transformador', quantity: 10, date: '2024-10-28 10:00 AM' },
    { id: 2, type: 'Salida', item: 'Cable', quantity: 5, date: '2024-10-29 02:30 PM' },
    { id: 3, type: 'Entrada', item: 'Medidor', quantity: 8, date: '2024-10-30 11:15 AM' },
    { id: 4, type: 'Salida', item: 'Fusible', quantity: 3, date: '2024-10-31 01:20 PM' },
  ];

  // Filtrar movimientos según el tipo (Entrada, Salida o Todos)
  const filteredData = movementsData.filter((movement) => {
    return filter === 'Todos' || movement.type === filter;
  });

  return (
    <div className="movements-container">
      <h1 className="movements-title">Historial de Movimientos</h1>

      {/* Filtros */}
      <div className="filters">
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
          Entrada
        </button>
        <button
          className={`filter-button ${filter === 'Salida' ? 'active' : ''}`}
          onClick={() => setFilter('Salida')}
        >
          Salida
        </button>
      </div>

      {/* Lista de Movimientos */}
      <div className="movements-list">
        {filteredData.map((movement) => (
          <div key={movement.id} className={`movement-item ${movement.type.toLowerCase()}`}>
            <h3 className="movement-type">{movement.type}</h3>
            <p className="movement-item-name">{movement.item}</p>
            <p className="movement-quantity">Cantidad: {movement.quantity}</p>
            <p className="movement-date">{movement.date}</p>
          </div>
        ))}
      </div>

      {/* Menú de Navegación */}
      <div className="navigation-menu">
        <button onClick={() => navigate('summary')} className="nav-button">Inicio</button>
        <button onClick={() => navigate('inventory')} className="nav-button">Inventario</button>
        <button onClick={() => navigate('purchase')} className="nav-button">Compra</button>
      </div>
    </div>
  );
};

export default MovementsScreen;

