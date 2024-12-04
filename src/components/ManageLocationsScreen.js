import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Para manejar solicitudes HTTP
import './ManageLocationsScreen.css'; // Archivo CSS para estilos

const ManageLocationsScreen = ({ navigateToAddDepo }) => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get('/api/depositos');
      setLocations(response.data);
    } catch (error) {
      alert('Error: No se pudo cargar la lista de depósitos');
      console.error(error);
    }
  };

  const confirmDeleteDepo = (codigoDeposito) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este depósito?')) {
      deleteDepo(codigoDeposito);
    }
  };

  const deleteDepo = async (codigoDeposito) => {
    try {
      await axios.delete(`/api/depositos/${codigoDeposito}`);
      setLocations((prevLocations) =>
        prevLocations.filter((depo) => depo.codigo_deposito !== codigoDeposito)
      );
      alert('Depósito eliminado correctamente');
    } catch (error) {
      alert('Error: No se pudo eliminar el depósito');
    }
  };

  const filteredLocations = Array.isArray(locations)
    ? locations.filter((depo) =>
        depo.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <h1 className="header">Gestionar Depósitos</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar depósitos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <div className="table-header-row">
          <div className="table-header">Nombre</div>
          <div className="table-header">Dirección</div>
          <div className="table-header">Acciones</div>
        </div>

        {filteredLocations.map((depo) => (
          <div key={depo.codigo_deposito} className="table-row">
            <div className="table-cell">{depo.nombre}</div>
            <div className="table-cell">{depo.direccion}</div>
            <div className="actions-container">
              <button
                className="delete-button"
                onClick={() => confirmDeleteDepo(depo.codigo_deposito)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="floating-button" onClick={navigateToAddDepo}>
        +
      </button>
    </div>
  );
};

export default ManageLocationsScreen;
