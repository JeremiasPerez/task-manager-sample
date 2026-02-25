
import Tarea from './Tarea.jsx'

function Columna({ estadoTarea, tareasGrupo}){

    const tareas = tareasGrupo.map((t) => <Tarea infoTarea={t}></Tarea>)

    return (
        <div>
            <div>{estadoTarea}</div>
            <div>
                {tareas}
            </div>
        </div>
    )
}

export default Columna