import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { NeedsProvider } from "../context/NeedsProvider";
import Estadisticas from "./estadisticas";
import LocalizadorPage from "./LocalizadorPage";
import MenuPage from "./MenuPage";
import NeedsPage from "./NeedsPage";
import ListNeedsPage from "./ListNeedsPage";
import ProveedoresSeleccionadosPage from "./ProveedoresSeleccionadosPage";


export const HomePage = () => {
  return (
    <NeedsProvider>
      <div className="home-grid">
        {/* Barra lateral (10%) */}
        <NavBar />

        {/* Contenido principal (90%) */}
        <div className="cards-container">
          <Routes>
            <Route path="/publicar-necesidad" element={<NeedsPage />} />
            <Route path="/listado-necesidades" element={<ListNeedsPage />} />
            <Route path="/panel-tendencias" element={<Estadisticas />} />
            <Route path="/localizador" element={<LocalizadorPage />} />
            <Route path="/verifica-proveedor" element={<ProveedoresSeleccionadosPage />} />
            <Route path="/home" element={<MenuPage />} />
          </Routes>
        </div>
      </div>
    </NeedsProvider>
  );
};


