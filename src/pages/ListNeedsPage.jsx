import Cabeceras from "../components/Cabeceras"
import NeedsList from "../components/NeedsList"
const ListNeedsPage = () => {
  return (
    <div>
    <Cabeceras titulo={'Necesidades Publicadas'}/>
      <NeedsList />
    </div>
  )
}

export default ListNeedsPage
