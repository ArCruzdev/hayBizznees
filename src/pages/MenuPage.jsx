import CardMenu from "../components/CardMenu"


const MenuPage = () => {
    
  return (
    <div className="menu-grid">
      <CardMenu titulo={'¿Que Necesitas?'} descripcion={'publica tus necesidades de proveeduria, Varias empresas te contactaran'} foto={'/assets/fotos/foto1.webp'} ruta={'/publicar-necesidad'}/>
      <CardMenu titulo={'Mira algo Interesante'} descripcion={'Empresas a las que les podrias vender'} foto={'/assets/fotos/mira.jpg'} ruta={'/listado-necesidades'}/>
      <CardMenu titulo={'Analisa'} descripcion={'tendencias en precios productos empresas solicitantes'} foto={'/assets/fotos/analisis.jpg'} ruta={'/panel-tendencias'}/>
      <CardMenu titulo={'Olfatea'} descripcion={'listado de proveedores que podrian interesarte'} foto={'/assets/fotos/personas.jpg'} ruta={'/localizador'}/>
      <CardMenu titulo={'Decide'} descripcion={'tus proveedores preseleccionados caracteristicas verificacion y filtros'} foto={'/assets/fotos/decide.jpg'} ruta={'/verifica-proveedor'}/>
    </div>
  )
}

export default MenuPage
