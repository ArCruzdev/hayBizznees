/* eslint-disable react/prop-types */
import  { useState } from "react";

const CardProveedores = ({ onSeleccionar }) => {
  const [seleccionado, setSeleccionado] = useState(false);

  const proveedor = {
    id: 1, // ID único para el proveedor
    nombre: "Proveedor de Maquinaria",
  };

  const manejarCambio = (e) => {
    const isChecked = e.target.checked;
    setSeleccionado(isChecked);
    onSeleccionar(proveedor, isChecked);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="/assets/fotos/foto1.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{proveedor.nombre}</h5>
        <p className="card-text">Descripción del proveedor de maquinaria...</p>
        
        {/* Checkbox para seleccionar el proveedor */}
        <input
          type="checkbox"
          checked={seleccionado}
          onChange={manejarCambio}
        /> Seleccionar

        <a href="#" className="btn btn-primary mt-2">Go somewhere</a>
      </div>
    </div>
  );
};

export default CardProveedores;

