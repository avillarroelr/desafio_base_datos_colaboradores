import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/ Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [originalColaboradores, setOriginalColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, { id: colaboradores.length + 1, ...nuevoColaborador }]);
    setOriginalColaboradores([...originalColaboradores, { id: originalColaboradores.length + 1, ...nuevoColaborador }]);
  };

  return (
    <>
      <div className='container'>
        <h2>Listado de Colaboradores</h2>
        <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} originalColaboradores={originalColaboradores} />
        <Listado colaboradores={colaboradores} />
        <Formulario agregarColaborador={agregarColaborador} />
        <Alert /> {/* Pendiente Alert */}
      </div>
    </>
  );
}

export default App;
