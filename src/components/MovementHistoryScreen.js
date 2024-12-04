import React, { useState, useEffect } from 'react';
import '../styles/MovementHistoryScreen.css'; // Archivo CSS para estilos

const MovementHistoryScreen = ({ navigateToAddMovement }) => {
  const [movements, setMovements] = useState([]);
  const [filteredMovements, setFilteredMovements] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const sampleMovements = [
      { id: '1', type: 'Entrada', item: 'Transformador', quantity: 10, date: '2024-10-28 10:00 AM' },
      { id: '2', type: 'Salida', item: 'Cable', quantity: 5, date: '2024-10-29 02:30 PM' },
      { id: '3', type: 'Entrada', item: 'Medidor', quantity: 8, date: '2024-10-30 11:15 AM' },
      { id: '4', type: 'Salida', item: 'Fusible', quantity: 3, date: '2024-10-31 09:45 AM' },
    ];

    const sortedMovements = sampleMovements.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setMovements(sortedMovements);
    setFilteredMovements(sortedMovements);
  }, []);

  const filterMovements = (type) => {
    setFilter(type);
    if (type === 'Todos') {
      setFilteredMovements(movements);
    } else {
      setFilteredMovements(movements.filter((movement) => movement.type === type));
    }
  };

  return (
    <div className="container">
      <h1 className="header">Historial de Movimientos</h1>

      <div className="filter-container">
        {['Todos', 'Entrada', 'Salida'].map((type) => (
          <button
            key={type}
            className={`filter-button ${filter === type ? 'active-filter' : ''}`}
            onClick={() => filterMovements(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="movements-list">
        {filteredMovements.length === 0 ? (
          <p className="empty-text">No hay movimientos registrados.</p>
        ) : (
          filteredMovements.map((movement) => (
            <div key={movement.id} className="movement-row">
              <div className={`icon-container ${movement.type === 'Entrada' ? 'entrada' : 'salida'}`}>
                <span className="icon">{movement.type === 'Entrada' ? '↓' : '↑'}</span>
              </div>
              <div className="text-container">
                <h3 className="movement-type">{movement.type}</h3>
                <p className="movement-details">{movement.item}</p>
                <p className="movement-details">Cantidad: {movement.quantity}</p>
                <p className="movement-date">{movement.date}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <button className="floating-button" onClick={navigateToAddMovement}>
        +
      </button>
    </div>
  );
};

export default MovementHistoryScreen;
