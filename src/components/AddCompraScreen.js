import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Reemplazo de `API` con `axios` estándar
import './AddCompraScreen.css'; // Archivo de estilos CSS

const AddCompraScreen = ({ navigateBack }) => {
  // Estados para almacenar la información del nuevo ítem
  const [fecha, setFecha] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [proveedores, setProveedores] = useState([]);
  const [location, setLocation] = useState(''); // Depósito seleccionado
  const [locations, setLocations] = useState([]); // Lista de depósitos

  // Obtenemos los depósitos y proveedores para cargar en las listas
  useEffect(() => {
    fetchLocations();
    fetchProveedor();
  }, []);

  const fetchProveedor = async () => {
    try {
      const response = await axios.get('/api/proveedores');
      if (Array.isArray(response.data)) {
        setProveedores(response.data);
      } else {
        console.error('La respuesta no es un array:', response.data);
        alert('Error: La respuesta del servidor no es válida');
      }
    } catch (error) {
      alert('Error: No se encontraron proveedores');
      console.error(error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get('/api/depositos');
      if (Array.isArray(response.data)) {
        setLocations(response.data);
      } else {
        console.error('La respuesta no es un array:', response.data);
        alert('Error: La respuesta del servidor no es válida');
      }
    } catch (error) {
      alert('Error: No se pudieron cargar los depósitos');
      console.error(error);
    }
  };

  // Función para manejar el envío del formulario
  const handleAddCompra = async () => {
    if (!fecha || !location || !proveedor) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const newItem = {
        cuit_proveedor: proveedor,
        fecha: new Date(fecha).toISOString(),
        codigo_deposito: location,
      };

      await axios.post('/api/compras', newItem);
      alert('Compra registrada correctamente');
      navigateBack(); // Regresamos a la pantalla anterior
    } catch (error) {
      alert('Error: No se pudo registrar la compra');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Registrar Compra</h1>

      {/* Selección de proveedor */}
      <div className="input-group">
        <label htmlFor="proveedor">Proveedor</label>
        <select
          id="proveedor"
          value={proveedor}
          onChange={(e) => setProveedor(e.target.value)}
          className="select"
        >
          <option value="">Selecciona un proveedor</option>
          {proveedores.map((pro) => (
            <option key={pro.cuit_proveedor} value={pro.cuit_proveedor}>
              {pro.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Selección de depósito */}
      <div className="input-group">
        <label htmlFor="location">Depósito</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="select"
        >
          <option value="">Selecciona un depósito</option>
          {locations.map((loc) => (
            <option key={loc.codigo_deposito} value={loc.codigo_deposito}>
              {loc.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Fecha */}
      <div className="input-group">
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="input"
        />
      </div>

      {/* Botón para registrar */}
      <button className="add-button" onClick={handleAddCompra}>
        Agregar
      </button>
    </div>
  );
};

export default AddCompraScreen;
