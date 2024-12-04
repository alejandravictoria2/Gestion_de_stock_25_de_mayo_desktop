import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Para manejar solicitudes HTTP
import './ManageUsersScreen.css'; // Archivo CSS para estilos

const ManageUsersScreen = ({ navigateToAddUser }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/usuarios');
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      alert('Error: No se pudo cargar el listado de usuarios.');
    }
  };

  const confirmDeleteUser = (userId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      deleteUser(userId);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/usuarios/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.legajo !== userId));
      alert('Usuario eliminado correctamente.');
    } catch (error) {
      alert('Error: No se pudo eliminar el usuario.');
    }
  };

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar usuario"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="table-container">
        <div className="table-header">
          <div>Legajo</div>
          <div>Nombre</div>
          <div>Apellido</div>
          <div>DNI</div>
          <div>Cargo</div>
          <div>Acciones</div>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No hay usuarios disponibles.</p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.legajo} className="table-row">
              <div>{user.legajo}</div>
              <div>{user.nombre}</div>
              <div>{user.apellido}</div>
              <div>{user.dni}</div>
              <div>{user.cargo}</div>
              <div>
                <button
                  className="delete-button"
                  onClick={() => confirmDeleteUser(user.legajo)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {modalVisible && selectedUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{`${selectedUser.nombre} ${selectedUser.apellido}`}</h2>
            <p>Legajo: {selectedUser.legajo}</p>
            <p>Nombre: {selectedUser.nombre}</p>
            <p>Apellido: {selectedUser.apellido}</p>
            <p>DNI: {selectedUser.dni}</p>
            <p>Cargo: {selectedUser.cargo}</p>
            <div className="modal-actions">
              <button className="modal-button">Modificar</button>
              <button
                className="modal-button"
                onClick={() => setModalVisible(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="floating-button" onClick={navigateToAddUser}>
        +
      </button>
    </div>
  );
};

export default ManageUsersScreen;
