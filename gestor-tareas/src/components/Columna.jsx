
import Tarea from './Tarea.jsx'
import '../styles/Column.css'

function Columna({ estadoTarea, tareasGrupo}){

    const tareas = tareasGrupo.map((t) => <Tarea infoTarea={t}></Tarea>)

    return (
        <div className="elementoColumna">
            <div className="tituloTarea">{estadoTarea}</div>
            <div className="contTareas">
                {tareas}
            </div>
            <div className="cantidadTareas">{tareas.length} tareas</div>
        </div>
    )
}

export default Columna