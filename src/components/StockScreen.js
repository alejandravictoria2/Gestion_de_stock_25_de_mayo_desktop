import React, { useState, useEffect } from 'react';
import './StockScreen.css'; // Archivo CSS para estilos
import axios from 'axios';

const StockScreen = () => {
  const [data, setData] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedDepo, setSelectedDepo] = useState('ALL');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProd, setSelectedProd] = useState(null);

  useEffect(() => {
    fetchInventory();
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    try {
      const response = await axios.get('/api/depositos');
      setDeposits([{ codigo_deposito: 'ALL', nombre: 'Todos' }, ...response.data]);
    } catch (error) {
      alert('No se pudo obtener la lista de depósitos');
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/stock');
      setData(response.data);
    } catch (error) {
      alert('No se pudo cargar el inventario');
    }
  };

  const confirmDeleteItem = (itemId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      deleteItem(itemId);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`/api/stock/${itemId}`);
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
      fetchInventory();
    } catch (error) {
      alert('No se pudo eliminar el producto');
    }
  };

  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(search.toLowerCase()) &&
    (selectedDepo === 'ALL' || item.codigo_deposito === selectedDepo)
  );

  return (
    <div className="container">
      <h1>Inventario</h1>
      <input
        type="text"
        placeholder="Buscar en inventario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={selectedDepo} onChange={(e) => setSelectedDepo(e.target.value)}>
        {deposits.map((deposit) => (
          <option key={deposit.codigo_deposito} value={deposit.codigo_deposito}>
            {deposit.nombre}
          </option>
        ))}
      </select>

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
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5">Lista de productos no disponible</td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item.id_producto}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>{item.precio * item.cantidad}</td>
                <td>{item.codigo_deposito}</td>
                <td>
                  <button onClick={() => confirmDeleteItem(item.id_producto)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {modalVisible && selectedProd && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProd.nombre}</h2>
            <p>Cantidad: {selectedProd.cantidad}</p>
            <p>Precio unitario: {selectedProd.precio}</p>
            <p>Precio total: {selectedProd.precio * selectedProd.cantidad}</p>
            <p>Depósito: {selectedProd.codigo_deposito}</p>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockScreen;
