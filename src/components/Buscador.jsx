import React, { useState, useEffect } from 'react';

const Buscador = ({ colaboradores, setColaboradores, originalColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setBusqueda(searchTerm);
    const filteredColaboradores = originalColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((value) =>
        value.toString().toLowerCase().includes(searchTerm)
      )
    );
    setColaboradores(filteredColaboradores);
  };
  
  useEffect(() => {
    if (!busqueda) {
      setColaboradores(originalColaboradores);
    }
  }, [busqueda, originalColaboradores, setColaboradores]);

  return (
    <div class="col-sm-6">
      <input 
        type="text"
        className="form-control"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar un colaborador"
      />
    </div>
  );
};

export default Buscador;

