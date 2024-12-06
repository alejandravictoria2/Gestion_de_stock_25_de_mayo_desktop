import React, { useState } from 'react';
import '../styles/InventoryScreen.css';

const InventoryScreen = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeposit, setSelectedDeposit] = useState('Todos');

  const products = [
    { id: 1, name: 'Producto A', quantity: 10, price: 1500, deposit: '1' },
    { id: 2, name: 'Producto B', quantity: 5, price: 1000, deposit: '1' },
    { id: 3, name: 'Producto C', quantity: 20, price: 2400, deposit: '1' },
    { id: 4, name: 'Producto Ejemplo', quantity: 50, price: 5000, deposit: '1' },
    { id: 5, name: 'Llave', quantity: 4, price: 2000, deposit: '2' },
    { id: 6, name: 'Alicate', quantity: 10, price: 200, deposit: '2' },
  ];

  const deposits = ['Todos', '1', '2'];

  const filteredProducts = products.filter(
    (product) =>
      (selectedDeposit === 'Todos' || product.deposit === selectedDeposit) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <header className="inventory-header">
        <h1>Inventario</h1>
      </header>

      {/* Filtros */}
      <div className="inventory-filters">
        <div className="filter-group">
          <label>Filtrar por nombre:</label>
          <input
            type="text"
            placeholder="Buscar en inventario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Filtrar por depósito:</label>
          <select
            value={selectedDeposit}
            onChange={(e) => setSelectedDeposit(e.target.value)}
          >
            {deposits.map((deposit) => (
              <option key={deposit} value={deposit}>
                {deposit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabla */}
      <div className="inventory-table">
        <table>
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>{product.deposit}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => alert(`Eliminar: ${product.name}`)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-products">
                  No se encontraron productos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Barra de navegación inferior */}
      <nav className="bottom-navigation">
        <button onClick={() => navigate('summary')} className="nav-button">
          <span role="img" aria-label="Inicio">🏠</span>
          <p>Inicio</p>
        </button>
        <button onClick={() => navigate('inventory')} className="nav-button active">
          <span role="img" aria-label="Inventario">📦</span>
          <p>Inventario</p>
        </button>
        <button onClick={() => navigate('movements')} className="nav-button">
          <span role="img" aria-label="Movimientos">🔄</span>
          <p>Movimientos</p>
        </button>
        <button onClick={() => navigate('purchase')} className="nav-button">
          <span role="img" aria-label="Compras">🛒</span>
          <p>Compras</p>
        </button>
      </nav>
    </div>
  );
};

export default InventoryScreen;

