// Componente Formulario en components/Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ agregarColaborador, setAlertMessage, setAlertType }) => {
  const [partner, setPartner] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!partner.nombre || !partner.correo || !partner.edad || !partner.cargo || !partner.telefono) {
      setAlertMessage('¡Completa todos los campos!');
      setAlertType('warning');
      return;
    }
    agregarColaborador(partner);
    setPartner({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
    setAlertMessage('Colaborador agregado exitosamente');
    setAlertType('success');
  };

  const handleChange = (e) => {
    setPartner({
      ...partner,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainer">
      <h2 className="mt-3">Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" className="form-control" id="nombre" name="nombre" value={partner.nombre} onChange={handleChange} placeholder="Nombre del Colaborador" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="correo" name="correo" value={partner.correo} onChange={handleChange} placeholder="Email del Colaborador" />
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" id="edad" name="edad" value={partner.edad} onChange={handleChange} placeholder="Edad del Colaborador" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="cargo" name="cargo" value={partner.cargo} onChange={handleChange} placeholder="Cargo del Colaborador" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="telefono" name="telefono" value={partner.telefono} onChange={handleChange} placeholder="Teléfono del Colaborador" />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
      </form>
    </div>
  );
}

export default Formulario;
