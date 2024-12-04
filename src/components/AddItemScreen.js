import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Para solicitudes HTTP
import './AddItemScreen.css'; // Archivo de estilos CSS

const AddItemScreen = ({ navigateBack }) => {
  // Estados para almacenar la información del nuevo ítem
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minStock, setMinStock] = useState('');
  const [maxStock, setMaxStock] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState(''); // Depósito seleccionado
  const [locations, setLocations] = useState([]); // Lista de depósitos

  // Obtenemos los depósitos para cargar en la lista
  useEffect(() => {
    fetchLocations();
  }, []);

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
  const handleAddItem = async () => {
    if (!name || !quantity || !price || !location || !minStock || !maxStock) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const newItem = {
        nombre: name,
        cantidad: parseInt(quantity, 10),
        stock_minimo: parseInt(minStock, 10),
        stock_maximo: parseInt(maxStock, 10),
        precio: parseFloat(price),
        codigo_deposito: location,
      };

      await axios.post('/api/stock', newItem);
      alert('Producto agregado correctamente');
      navigateBack(); // Regresamos a la pantalla anterior
    } catch (error) {
      alert('Error: No se pudo agregar el producto');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Agregar Nuevo Artículo</h1>
      <div className="input-group">
        <label htmlFor="name">Nombre del Artículo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Ingrese el nombre del artículo"
        />
      </div>

      <div className="input-group">
        <label htmlFor="quantity">Cantidad</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input"
          placeholder="Ingrese la cantidad"
        />
      </div>

      <div className="input-group">
        <label htmlFor="minStock">Stock mínimo</label>
        <input
          type="number"
          id="minStock"
          value={minStock}
          onChange={(e) => setMinStock(e.target.value)}
          className="input"
          placeholder="Ingrese el stock mínimo"
        />
      </div>

      <div className="input-group">
        <label htmlFor="maxStock">Stock máximo</label>
        <input
          type="number"
          id="maxStock"
          value={maxStock}
          onChange={(e) => setMaxStock(e.target.value)}
          className="input"
          placeholder="Ingrese el stock máximo"
        />
      </div>

      <div className="input-group">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
          placeholder="Ingrese el precio"
        />
      </div>

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

      <button className="add-button" onClick={handleAddItem}>
        Agregar
      </button>
    </div>
  );
};

export default AddItemScreen;
