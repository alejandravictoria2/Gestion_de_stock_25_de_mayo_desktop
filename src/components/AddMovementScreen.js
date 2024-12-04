import React, { useEffect, useState } from 'react';
//import axios from 'axios'; // Manejo de solicitudes HTTP
import '../Styles/AddMovementScreen.css'; // Estilos CSS

const AddMovementScreen = () => {
  const [sourceLocation, setSourceLocation] = useState(''); // Depósito de salida seleccionado
  const [destinationLocation, setDestinationLocation] = useState(''); // Depósito de destino seleccionado
  const [locations, setLocations] = useState([]); // Lista de depósitos

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

  const handleSubmit = () => {
    if (!sourceLocation || !destinationLocation) {
      alert('Por favor seleccione ambos depósitos.');
      return;
    }
    alert(`Movimiento registrado de ${sourceLocation} a ${destinationLocation}`);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  return (
    <div className="container">
      <h1 className="header">Registrar Movimiento</h1>

      <div className="input-group">
        <label htmlFor="sourceLocation">Depósito de salida</label>
        <select
          id="sourceLocation"
          value={sourceLocation}
          onChange={(e) => setSourceLocation(e.target.value)}
          className="select"
        >
          <option value="">Seleccione un depósito</option>
          {locations.map((loc) => (
            <option key={loc.codigo_deposito} value={loc.codigo_deposito}>
              {loc.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="destinationLocation">Depósito de destino</label>
        <select
          id="destinationLocation"
          value={destinationLocation}
          onChange={(e) => setDestinationLocation(e.target.value)}
          className="select"
        >
          <option value="">Seleccione un depósito</option>
          {locations.map((loc) => (
            <option key={loc.codigo_deposito} value={loc.codigo_deposito}>
              {loc.nombre}
            </option>
          ))}
        </select>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Registrar Movimiento
      </button>
    </div>
  );
};

export default AddMovementScreen;
