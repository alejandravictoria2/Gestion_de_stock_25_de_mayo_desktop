import React, { useState } from 'react';
import '../styles/PurchaseScreen.css';

const PurchaseScreen = ({ navigate }) => {
  const [purchasesData, setPurchasesData] = useState([
    {
      id: 1,
      date: '2024-12-01',
      provider: 'Enersa',
      depot: 'Hasenkamp',
      details: [
        { name: 'Producto A', quantity: 10, unit: 'm', price: 1500 },
        { name: 'Producto B', quantity: 5, unit: 'm', price: 1000 },
      ],
    },
  ]);

  const [newPurchase, setNewPurchase] = useState({
    id: '',
    date: '',
    provider: '',
    depot: '',
    details: [],
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPurchase((prev) => ({ ...prev, [name]: value }));
  };

  const addNewDetail = () => {
    setNewPurchase((prev) => ({
      ...prev,
      details: [...prev.details, { name: '', quantity: '', unit: '', price: '' }],
    }));
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...newPurchase.details];
    updatedDetails[index][field] = value;
    setNewPurchase((prev) => ({ ...prev, details: updatedDetails }));
  };

  const handleAddPurchase = () => {
    if (!newPurchase.id || !newPurchase.date || !newPurchase.provider || !newPurchase.depot) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    setPurchasesData((prev) => [...prev, newPurchase]);
    setIsAdding(false);
    setNewPurchase({
      id: '',
      date: '',
      provider: '',
      depot: '',
      details: [],
    });
  };

  const calculateTotal = (details) =>
    details.reduce((sum, item) => sum + (item.quantity * item.price || 0), 0);

  return (
    <div className="purchase-container">
      <header className="purchase-header">
        <h1>Gestión de Compras</h1>
      </header>

      {/* Tabla de compras */}
      <table className="purchase-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Proveedor</th>
            <th>Depósito</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {purchasesData.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.date}</td>
              <td>{purchase.provider}</td>
              <td>{purchase.depot}</td>
              <td>U$S {calculateTotal(purchase.details)}</td>
              <td>
                <button
                  className="view-details-button"
                  onClick={() => alert(JSON.stringify(purchase, null, 2))}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón flotante para agregar nueva compra */}
      <button className="add-button" onClick={() => setIsAdding(true)}>
        +
      </button>

      {/* Formulario para agregar compras */}
      {isAdding && (
        <div className="add-form">
          <h2>Agregar Compra</h2>
          <label>
            Código:
            <input
              type="text"
              name="id"
              value={newPurchase.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Fecha:
            <input
              type="date"
              name="date"
              value={newPurchase.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Proveedor:
            <input
              type="text"
              name="provider"
              value={newPurchase.provider}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Depósito:
            <input
              type="text"
              name="depot"
              value={newPurchase.depot}
              onChange={handleInputChange}
            />
          </label>

          {/* Detalles de compra */}
          <h3>Detalles</h3>
          {newPurchase.details.map((detail, index) => (
            <div key={index} className="detail-row">
              <input
                type="text"
                placeholder="Producto"
                value={detail.name}
                onChange={(e) => handleDetailChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Cantidad"
                value={detail.quantity}
                onChange={(e) => handleDetailChange(index, 'quantity', e.target.value)}
              />
              <input
                type="text"
                placeholder="Unidad"
                value={detail.unit}
                onChange={(e) => handleDetailChange(index, 'unit', e.target.value)}
              />
              <input
                type="number"
                placeholder="Precio"
                value={detail.price}
                onChange={(e) => handleDetailChange(index, 'price', e.target.value)}
              />
            </div>
          ))}
          <button className="add-detail-button" onClick={addNewDetail}>
            + Agregar Detalle
          </button>

          {/* Botones de acción */}
          <div className="form-buttons">
            <button className="save-button" onClick={handleAddPurchase}>
              Guardar
            </button>
            <button className="cancel-button" onClick={() => setIsAdding(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Barra de navegación */}
      <nav className="bottom-navigation">
        <button className="nav-button" onClick={() => navigate('summary')}>
          <span role="img" aria-label="Inicio">
            🏠
          </span>
          <p>Inicio</p>
        </button>
        <button className="nav-button" onClick={() => navigate('inventory')}>
          <span role="img" aria-label="Inventario">
            📦
          </span>
          <p>Inventario</p>
        </button>
        <button className="nav-button" onClick={() => navigate('movements')}>
          <span role="img" aria-label="Movimientos">
            🔄
          </span>
          <p>Movimientos</p>
        </button>
        <button className="nav-button active" onClick={() => navigate('purchase')}>
          <span role="img" aria-label="Compras">
            🛒
          </span>
          <p>Compras</p>
        </button>
      </nav>
    </div>
  );
};

export default PurchaseScreen;
