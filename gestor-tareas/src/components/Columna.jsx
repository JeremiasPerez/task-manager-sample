
import Tarea from './Tarea.jsx'
import '../styles/Column.css'

function Columna({ estadoTarea, tareasGrupo, gestionarClicEnTarea}){

    const tareas = tareasGrupo.map((t) => <Tarea gestionarClicEnTarea={gestionarClicEnTarea} infoTarea={t}></Tarea>)

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