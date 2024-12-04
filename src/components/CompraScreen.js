import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Uso de Axios para solicitudes HTTP
import './CompraScreen.css'; // Estilos CSS

const CompraScreen = ({ navigateToAddCompra }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCompras();
  }, []);

  const fetchCompras = async () => {
    try {
      const response = await axios.get('/api/compras');
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      alert('Error: No se pudo cargar el listado de compras');
      setData([]);
    }
  };

  const confirmDeleteCompra = (compraId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta compra?')) {
      deleteCompras(compraId);
    }
  };

  const deleteCompras = async (compraId) => {
    try {
      await axios.delete(`/api/compras/${compraId}`);
      setData((prevData) => prevData.filter((compra) => compra.codigoCompra !== compraId));
      alert('Compra eliminada correctamente');
      fetchCompras(); // Cargar nuevamente la tabla después de eliminar
    } catch (error) {
      alert('Error: No se pudo eliminar la compra');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Compras</h1>

      {/* Tabla de compras */}
      <div className="table-container">
        <div className="table-header-row">
          <div className="table-header">Compra</div>
          <div className="table-header">Proveedor</div>
          <div className="table-header">Fecha</div>
          <div className="table-header">Depósito</div>
          <div className="table-header">Acciones</div>
        </div>

        {data.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">Lista de compras no disponible</p>
          </div>
        ) : (
          data.map((compra) => (
            <div key={compra.codigoCompra} className="table-row">
              <div className="table-cell">{compra.codigoCompra}</div>
              <div className="table-cell">{compra.cuitProveedor}</div>
              <div className="table-cell">{compra.fechaCompra}</div>
              <div className="table-cell">{compra.codigoDeposito}</div>
              <div className="actions-container">
                <button
                  className="delete-button"
                  onClick={() => confirmDeleteCompra(compra.codigoCompra)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botón flotante para añadir compras */}
      <button className="floating-button" onClick={navigateToAddCompra}>
        +
      </button>
    </div>
  );
};

export default CompraScreen;
