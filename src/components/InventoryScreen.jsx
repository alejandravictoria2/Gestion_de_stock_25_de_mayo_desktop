import React, { useState } from 'react';
import '../styles/InventoryScreen.css';

const InventoryScreen = ({ navigate }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');

  const inventoryData = [
    { id: 1, name: 'Producto A', quantity: 10, price: 1500, depot: 1 },
    { id: 2, name: 'Producto B', quantity: 5, price: 1000, depot: 1 },
    { id: 3, name: 'Producto C', quantity: 20, price: 2400, depot: 1 },
    { id: 4, name: 'Fusible', quantity: 100, price: 1200, depot: 1 },
    { id: 5, name: 'Llave', quantity: 4, price: 2000, depot: 1 },
    { id: 6, name: 'Alicate', quantity: 10, price: 200, depot: 2 },
  ];

  const filteredData = inventoryData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'Todos' || item.depot.toString() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Inventario</h1>

      {/* Filtros */}
      <div className="filters">
        <div className="filter">
          <label htmlFor="search">Filtrar por nombre:</label>
          <input
            id="search"
            type="text"
            placeholder="Buscar en inventario..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter">
          <label htmlFor="depot">Filtrar por depósito:</label>
          <select
            id="depot"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="1">Depósito 1</option>
            <option value="2">Depósito 2</option>
          </select>
        </div>
      </div>

      {/* Tabla de Inventario */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Depósito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>{item.depot}</td>
              <td>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Menú de navegación */}
      <div className="navigation-menu">
        <button onClick={() => navigate('summary')} className="nav-button">Inicio</button>
        <button onClick={() => navigate('movements')} className="nav-button">Movimientos</button>
        <button onClick={() => navigate('purchase')} className="nav-button">Compra</button>
      </div>
    </div>
  );
};

export default InventoryScreen;
