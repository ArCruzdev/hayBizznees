/* eslint-disable react/prop-types */
import { NeedsContext } from "./NeedsContext";
import { useState, useEffect } from "react";
import { fetchContractRequests } from "../helpers/ajax";

export const NeedsProvider = ({ children }) => {
  const [needs, setNeeds] = useState([]);
  const [apiNeeds, setApiNeeds] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);

  useEffect(() => {
    const getApiNeeds = async () => {
      const data = await fetchContractRequests();
      const sortedData = data.sort((a, b) => new Date(b.fecha_de_ultima_publicaci) - new Date(a.fecha_de_ultima_publicaci)) 
      setApiNeeds(sortedData);
    };

    getApiNeeds();
  }, []);

  const addNeed = (need) => {
    setNeeds((prevNeeds) => [...prevNeeds, need]);
  };

  // Función para agregar un proveedor a la lista de seleccionados
  const addSelectedProvider = (provider) => {
    setSelectedProviders((prevProviders) => [...prevProviders, provider]);
  };

  // Función para eliminar un proveedor de la lista de seleccionados
  const removeSelectedProvider = (providerId) => {
    setSelectedProviders((prevProviders) =>
      prevProviders.filter((provider) => provider.id !== providerId)
    );
  };

  return (
    <NeedsContext.Provider
      value={{
        needs: [...needs, ...apiNeeds],
        addNeed,
        selectedProviders,
        addSelectedProvider,
        removeSelectedProvider,
      }}
    >
      {children}
    </NeedsContext.Provider>
  );
};
