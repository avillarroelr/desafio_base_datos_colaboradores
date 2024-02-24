import { useState } from 'react'
import Listado from './components/ Listado'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado colaboradores={BaseColaboradores} />

    </>
  )
}

export default App
