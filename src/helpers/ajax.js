export const fetchContractRequests = async () => {
  try {
    const response = await fetch('https://www.datos.gov.co/resource/p6dx-8zbt.json?departamento_entidad=Distrito%20Capital%20de%20Bogot%C3%A1');
    const data = await response.json();
    
    // Define palabras clave para filtrar
    const keywords = ["compra uniformes", "dotaciones", "dotación", "uniformes", "dotacion personal", "vestuario", "calzado", "epp"];
    
    // Filtra los datos según las palabras clave
    const filteredData = data.filter(item => {
      // Convierte el texto a minúsculas para comparar sin distinción de mayúsculas/minúsculas
      const description = item.descripci_n_del_procedimiento.toLowerCase();
      
      // Verifica si alguna palabra clave está en la descripción
      return keywords.some(keyword => description.includes(keyword));
    });

    return filteredData;
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    return [];
  }
};
