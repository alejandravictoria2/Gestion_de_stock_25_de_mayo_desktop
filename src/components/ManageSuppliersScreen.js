import React, { useState } from 'react';
import './ManageSuppliersScreen.css'; // Archivo CSS para estilos

const ManageSuppliersScreen = () => {
  const [suppliers, setSuppliers] = useState([
    { id: '1', name: 'Proveedor A', contact: '123456789', products: 'Transformadores, Cables' },
    { id: '2', name: 'Proveedor B', contact: '987654321', products: 'Medidores, Fusibles' },
  ]);
  const [newSupplierName, setNewSupplierName] = useState('');
  const [newSupplierContact, setNewSupplierContact] = useState('');
  const [newSupplierProducts, setNewSupplierProducts] = useState('');

  const handleAddSupplier = () => {
    if (!newSupplierName || !newSupplierContact || !newSupplierProducts) {
      alert('Por favor completa todos los campos.');
      return;
    }
    const newSupplier = {
      id: `${suppliers.length + 1}`,
      name: newSupplierName,
      contact: newSupplierContact,
      products: newSupplierProducts,
    };
    setSuppliers([...suppliers, newSupplier]);
    setNewSupplierName('');
    setNewSupplierContact('');
    setNewSupplierProducts('');
    alert('Proveedor agregado.');
  };

  const handleDeleteSupplier = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
      setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
      alert('Proveedor eliminado.');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Gestión de Proveedores</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Nombre del Proveedor"
          value={newSupplierName}
          onChange={(e) => setNewSupplierName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Contacto"
          value={newSupplierContact}
          onChange={(e) => setNewSupplierContact(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Productos que Ofrece"
          value={newSupplierProducts}
          onChange={(e) => setNewSupplierProducts(e.target.value)}
          className="input"
        />
        <button className="add-button" onClick={handleAddSupplier}>
          Agregar Proveedor
        </button>
      </div>

      <div className="suppliers-list">
        {suppliers.length === 0 ? (
          <p className="empty-text">No hay proveedores.</p>
        ) : (
          suppliers.map((supplier) => (
            <div key={supplier.id} className="supplier-row">
              <p className="supplier-info">
                {supplier.name} - {supplier.contact}
              </p>
              <p className="supplier-products">Productos: {supplier.products}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteSupplier(supplier.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageSuppliersScreen;
