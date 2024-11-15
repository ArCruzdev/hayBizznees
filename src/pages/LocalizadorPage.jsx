import { useContext } from 'react';
import CardProveedores from '../components/CardProveedores';
import CarouselComponent from '../components/CarouselComponent';
import { NeedsContext } from '../context/NeedsContext';


const LocalizadorPage = () => {
  const { addSelectedProvider, removeSelectedProvider } = useContext(NeedsContext);

  const manejarSeleccion = (proveedor, seleccionado) => {
    if (seleccionado) {
      addSelectedProvider(proveedor);
    } else {
      removeSelectedProvider(proveedor.id);
    }
  };

  return (
    <div>
      <CarouselComponent />
      <div className=" mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <CardProveedores onSeleccionar={manejarSeleccion} />
          </div>
          {/* Agrega más CardProveedores según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default LocalizadorPage;



