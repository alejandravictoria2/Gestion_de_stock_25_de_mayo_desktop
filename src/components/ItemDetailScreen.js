import React from 'react';
import './ItemDetailScreen.css'; // Archivo CSS para estilos

const ItemDetailScreen = ({ item, navigateToEditItem, navigateBack }) => {
  // Función para manejar la navegación a la pantalla de edición
  const handleEditItem = () => {
    navigateToEditItem(item); // Llama a la función pasada como prop con los detalles del ítem
  };

  return (
    <div className="container">
      <h1 className="header">Detalles del Ítem</h1>

      {/* Mostrar detalles del ítem */}
      <div className="detail-container">
        <span className="detail-label">Nombre:</span>
        <span className="detail-value">{item.name}</span>
      </div>

      <div className="detail-container">
        <span className="detail-label">Cantidad:</span>
        <span className="detail-value">{item.quantity}</span>
      </div>

      <div className="detail-container">
        <span className="detail-label">Precio:</span>
        <span className="detail-value">{item.price}</span>
      </div>

      <div className="detail-container">
        <span className="detail-label">Ubicación:</span>
        <span className="detail-value">{item.location}</span>
      </div>

      {/* Botón para editar el ítem */}
      <button className="action-button" onClick={handleEditItem}>
        Editar Ítem
      </button>

      {/* Botón para regresar a la pantalla anterior */}
      <button className="action-button" onClick={navigateBack}>
        Volver
      </button>
    </div>
  );
};

export default ItemDetailScreen;
