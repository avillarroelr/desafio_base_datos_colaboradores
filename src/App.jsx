import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [originalColaboradores, setOriginalColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (!nuevoColaborador.nombre || !nuevoColaborador.correo || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
      setAlertMessage('Por favor completa todos los campos');
      setAlertType('warning');
    } else {
      setColaboradores([...colaboradores, { id: colaboradores.length + 1, ...nuevoColaborador }]);
      setOriginalColaboradores([...originalColaboradores, { id: originalColaboradores.length + 1, ...nuevoColaborador }]);
      setAlertMessage('Colaborador agregado exitosamente');
      setAlertType('success');
    }
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <div class="row  justify-content-center">
            <div class="col-sm-7">
              <div class="card text-left">
                <div class="card-body ">
                  <h2 class="card-title">Listado de Colaboradores</h2>
                  <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} originalColaboradores={originalColaboradores} />
                  <Listado colaboradores={colaboradores} />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Agregar Colaborador</h2>
                  <Formulario agregarColaborador={agregarColaborador} setAlertMessage={setAlertMessage} setAlertType={setAlertType} />
                  <br />
                  <Alert message={alertMessage} type={alertType} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;