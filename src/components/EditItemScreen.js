import React, { useState } from 'react';
import './EditItemScreen.css'; // Archivo CSS para estilos

const EditItemScreen = ({ item, onSave, navigateBack }) => {
  // Estados para almacenar y actualizar la información del ítem
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity.toString());
  const [price, setPrice] = useState(item.price.toString());
  const [location, setLocation] = useState(item.location);

  // Función para manejar la actualización del ítem
  const handleSaveChanges = () => {
    if (!name || !quantity || !price || !location) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Lógica para actualizar el ítem
    const updatedItem = {
      ...item,
      name,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      location,
    };

    onSave(updatedItem); // Llama a la función pasada como prop para guardar los cambios
    alert('Ítem actualizado correctamente');
    navigateBack(); // Regresa a la pantalla anterior
  };

  return (
    <div className="container">
      <h1 className="header">Editar Ítem</h1>

      <div className="input-group">
        <label htmlFor="name">Nombre del Ítem</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
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
        />
      </div>

      <div className="input-group">
        <label htmlFor="location">Ubicación</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input"
        />
      </div>

      <button className="save-button" onClick={handleSaveChanges}>
        Guardar Cambios
      </button>
    </div>
  );
};

export default EditItemScreen;
