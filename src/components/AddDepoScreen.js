import React, { useState } from 'react';
import axios from 'axios'; // Uso estándar de Axios para manejar solicitudes HTTP
import './AddDepoScreen.css'; // Archivo CSS para estilos

const AddDepoScreen = ({ navigateBack }) => {
  const [nombre, setNombre] = useState('');
  const [location, setLocation] = useState('');

  const handleAddDepo = async () => {
    if (!nombre || !location) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const newDepo = {
        nombre: nombre,
        direccion: location,
      };

      await axios.post('/api/depositos', newDepo);
      alert('Depósito agregado correctamente');
      navigateBack(); // Regresa a la pantalla anterior
    } catch (error) {
      alert('Error: No se pudo agregar el depósito');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Agregar Depósito</h1>

      <div className="input-group">
        <label htmlFor="nombre">Nombre del depósito</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre del depósito"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          placeholder="Ingrese la dirección"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input"
        />
      </div>

      <button className="add-button" onClick={handleAddDepo}>
        Agregar
      </button>
    </div>
  );
};

export default AddDepoScreen;
