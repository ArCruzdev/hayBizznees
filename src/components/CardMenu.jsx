
/* eslint-disable react/prop-types */
const CardMenu = ({titulo, descripcion, foto, ruta}) => {
    return (
      <div className="cardMenu"> 
        <img src={foto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
            {descripcion}
            </p>
          <a href={ruta} className="btn btn-outline-success">Ampliar</a>
        </div>
      </div>
    );
  };
  
  export default CardMenu;