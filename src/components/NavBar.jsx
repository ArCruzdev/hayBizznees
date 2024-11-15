import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { NeedsContext } from '../context/NeedsContext';

export const NavBar = () => {
  // Consumimos el contexto para obtener el array de necesidades
  const { needs } = useContext(NeedsContext);
  return (
    <nav className="navbar sidebar ">
      <div className="navbar-brand p-3">
        <NavLink to="/home" className="navbar-brand">
          <img src="/assets/fotos/logo.jpeg" alt="" />
        </NavLink>
      </div>
      <ul className="navbar-nav flex-column">
        <li className="nav-item">
          <NavLink to="/publicar-necesidad" className="nav-link">
            Publicar Necesidad
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/listado-necesidades" className="nav-link">
            Listado Necesidades
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/panel-tendencias" className="nav-link">
            Panel Tendencias
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/localizador" className="nav-link">
            Localizador Proveedores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/verifica-proveedor" className="nav-link">
            Verifica Proveedor
          </NavLink>
        </li>
      </ul>
      <button type="button" className="btn btn-primary m-3">
        Publicaciones <span className="badge bg-secondary ms-2">{needs.length}</span>
      </button>
    </nav>
  );
};


