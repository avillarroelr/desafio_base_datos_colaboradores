// components/Formulario.jsx
import React, { useState } from 'react';
const Formulario = ({ agregarColaborador }) => {
    const [partner, setPartner] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación de campos no vacíos
        if (!partner.nombre || !partner.correo || !partner.edad || !partner.cargo || !partner.telefono) {
            alert('Por favor completa todos los campos');
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
    };

    const handleChange = (e) => {
        setPartner({
            ...partner,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2>Agregar Colaborador</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={partner.nombre} onChange={handleChange} placeholder="Nombre" />
                <input type="email" name="correo" value={partner.correo} onChange={handleChange} placeholder="Correo" />
                <input type="number" name="edad" value={partner.edad} onChange={handleChange} placeholder="Edad" />
                <input type="text" name="cargo" value={partner.cargo} onChange={handleChange} placeholder="Cargo" />
                <input type="text" name="telefono" value={partner.telefono} onChange={handleChange} placeholder="Teléfono" />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default Formulario;
