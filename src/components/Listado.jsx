import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = ({ colaboradores, eliminarColaborador }) => { 
    return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map(colaborador => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.id}</td>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminarColaborador(colaborador.id)}
                                >
                                    <i className="bi bi-x">X</i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listado;

