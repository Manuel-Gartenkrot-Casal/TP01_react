import Citas from './Citas.jsx'
import './Listado.css'

function Listado(){
    return(
        <div className="listado">
        <h1 className="titulo">Administra tus Citas</h1>
        <Citas />
        </div>
    )
}

  export default Listado;