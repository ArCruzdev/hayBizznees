
/* eslint-disable react/prop-types */
import {  Button } from "reactstrap"

const CardNeeds = ({data }) => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank')
  }
  return (
    <div className="card">
    <div className="card_data">
      <h3>Empresa: {data.entidad}</h3>
      <h4>NIT: {data.nit_entidad}</h4>
      <p>Ciudad: <br /> {data.ciudad_entidad}</p>
      <p>Necesidad: {data.descripci_n_del_procedimiento}</p> 
      <h5>Fecha Publicacion:{data.fecha_de_ultima_publicaci}</h5>
      <h5>Precio Base: {data.precio_base}</h5>
      <h6>Modalidad Contratacion:{data.modalidad_de_contratacion}</h6>
    </div>
    <Button
    color="success"
    outline
    onClick={() => handleButtonClick(data.urlproceso.url)}
  >
    Ampliar info
  </Button>
    </div>
  
  )
}

export default CardNeeds
