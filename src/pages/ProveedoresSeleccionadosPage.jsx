import { useContext } from 'react';
import { NeedsContext } from '../context/NeedsContext';

const ProveedoresSeleccionadosPage = () => {
  const { selectedProviders } = useContext(NeedsContext);

  return (
    <div className="container mt-4">
      <h2>Proveedores Seleccionados</h2>
      {selectedProviders.length > 0 ? (
        <ul>
          {selectedProviders.map((p) => (
            <li key={p.id}>{p.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No hay proveedores seleccionados.</p>
      )}
    </div>
  );
};

export default ProveedoresSeleccionadosPage;
