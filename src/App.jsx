import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/ Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, { id: colaboradores.length + 1, ...nuevoColaborador }]);
  };

  return (
    <>
      <Alert /> {/* Agrega el componente de Alert si es necesario */}
      <Buscador /> {/* Agrega el componente de Buscador si es necesario */}
      <Listado colaboradores={colaboradores} />
      <Formulario agregarColaborador={agregarColaborador} />
    </>
  );
}

export default App;

