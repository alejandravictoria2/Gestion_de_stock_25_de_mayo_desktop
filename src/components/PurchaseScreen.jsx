import React, { useState } from 'react';
import '../styles/PurchaseScreen.css';

const PurchaseScreen = ({ navigate }) => {
  const [purchasesData, setPurchasesData] = useState([
    {
      id: 20,
      date: '2024-12-01',
      provider: 'Enersa',
      depot: 'Hasenkamp',
      details: [
        { name: 'Producto A', quantity: 10, unit: 'm', price: 1500 },
        { name: 'Producto B', quantity: 5, unit: 'm', price: 1000 },
        { name: 'Producto C', quantity: 20, unit: 'm', price: 2400 },
      ],
    },
  ]);

  const [newPurchase, setNewPurchase] = useState({
    id: '',
    date: '',
    provider: '',
    depot: '',
    details: [{ name: '', quantity: '', unit: '', price: '' }],
  });

  const [showAddModal, setShowAddModal] = useState(false);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => {
    setShowAddModal(false);
    setNewPurchase({
      id: '',
      date: '',
      provider: '',
      depot: '',
      details: [{ name: '', quantity: '', unit: '', price: '' }],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPurchase((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...newPurchase.details];
    updatedDetails[index][field] = value;
    setNewPurchase((prev) => ({ ...prev, details: updatedDetails }));
  };

  const addNewDetail = () => {
    setNewPurchase((prev) => ({
      ...prev,
      details: [...prev.details, { name: '', quantity: '', unit: '', price: '' }],
    }));
  };

  const handleAddPurchase = () => {
    if (!newPurchase.id || !newPurchase.date || !newPurchase.provider || !newPurchase.depot) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    setPurchasesData((prev) => [...prev, newPurchase]);
    closeAddModal();
  };

  const calculateTotal = (details) => {
    return details.reduce((sum, item) => sum + (item.quantity * item.price || 0), 0);
  };

  return (
    <div className="purchase-container">
      <h1 className="purchase-title">Compras</h1>

      {/* Tabla de compras */}
      <table className="purchase-table">
        <thead>
          <tr>
            <th>Compra</th>
            <th>Fecha</th>
            <th>Proveedor</th>
            <th>Depósito</th>
            <th>Total</th>
            <th>Detalles</th>
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
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Cantidad</th>
                      <th>Unidad</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchase.details.map((detail, index) => (
                      <tr key={index}>
                        <td>{detail.name}</td>
                        <td>{detail.quantity}</td>
                        <td>{detail.unit}</td>
                        <td>U$S {detail.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón flotante para agregar compras */}
      <button className="add-button" onClick={openAddModal}>
        +
      </button>

      {/* Modal para agregar compra */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Agregar Compra</h2>
            <div className="modal-content">
              <label>
                Código de Compra:
                <input
                  type="text"
                  name="id"
                  value={newPurchase.id}
                  onChange={handleInputChange}
                  placeholder="Ej: 25"
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
                  placeholder="Ej: Enersa"
                />
              </label>
              <label>
                Depósito:
                <input
                  type="text"
                  name="depot"
                  value={newPurchase.depot}
                  onChange={handleInputChange}
                  placeholder="Ej: Hasenkamp"
                />
              </label>
              <div>
                <h3>Detalles</h3>
                {newPurchase.details.map((detail, index) => (
                  <div key={index} className="detail-row">
                    <input
                      type="text"
                      placeholder="Producto"
                      value={detail.name}
                      onChange={(e) =>
                        handleDetailChange(index, 'name', e.target.value)
                      }
                    />
                    <input
                      type="number"
                      placeholder="Cantidad"
                      value={detail.quantity}
                      onChange={(e) =>
                        handleDetailChange(index, 'quantity', e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Unidad"
                      value={detail.unit}
                      onChange={(e) =>
                        handleDetailChange(index, 'unit', e.target.value)
                      }
                    />
                    <input
                      type="number"
                      placeholder="Precio"
                      value={detail.price}
                      onChange={(e) =>
                        handleDetailChange(index, 'price', e.target.value)
                      }
                    />
                  </div>
                ))}
                <button onClick={addNewDetail} className="add-detail-button">
                  Agregar Detalle
                </button>
              </div>
              <div className="modal-buttons">
                <button className="add-button" onClick={handleAddPurchase}>
                  Guardar
                </button>
                <button className="close-button" onClick={closeAddModal}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseScreen;
