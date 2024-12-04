import React, { useState } from 'react';
import axios from 'axios'; // Librería para manejar solicitudes HTTP
import './AddUserScreen.css'; // Archivo CSS para estilos

const AddUserScreen = ({ navigateBack }) => {
  // Estados para almacenar la información del nuevo usuario
  const [legajo, setLegajo] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [role, setRole] = useState('');
  const [pass, setPass] = useState('');

  // Función para manejar el envío del formulario
  const handleAddUser = async () => {
    if (!legajo || !name || !lastName || !dni || !role || !pass) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const newUser = {
        legajo: legajo,
        nombre: name,
        apellido: lastName,
        dni: dni,
        cargo: role,
        contrasenia: pass,
      };

      await axios.post('/api/usuarios', newUser);
      alert('Usuario agregado correctamente');
      navigateBack(); // Regresamos a la pantalla anterior
    } catch (error) {
      alert('Error: No se pudo crear el usuario');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Agregar Usuario</h1>

      <div className="input-group">
        <label htmlFor="legajo">Legajo</label>
        <input
          type="text"
          id="legajo"
          value={legajo}
          onChange={(e) => setLegajo(e.target.value)}
          className="input"
          placeholder="Ingrese el legajo"
        />
      </div>

      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Ingrese el nombre"
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input"
          placeholder="Ingrese el apellido"
        />
      </div>

      <div className="input-group">
        <label htmlFor="dni">DNI</label>
        <input
          type="number"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          className="input"
          placeholder="Ingrese el DNI"
        />
      </div>

      <div className="input-group">
        <label htmlFor="role">Cargo</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
          placeholder="Ingrese el cargo"
        />
      </div>

      <div className="input-group">
        <label htmlFor="pass">Contraseña</label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="input"
          placeholder="Ingrese la contraseña"
        />
      </div>

      <button className="add-button" onClick={handleAddUser}>
        Agregar
      </button>
    </div>
  );
};

export default AddUserScreen;
