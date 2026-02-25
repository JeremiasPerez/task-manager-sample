
import {listaTareas} from '../listaTareas.js'
import Columna from './Columna.jsx'

function Gestor(){

    const tareasTodo = listaTareas.filter(t => t.estado === 'to do')
    const tareasInProgress = listaTareas.filter(t => t.estado === 'in progress')
    const tareasDone = listaTareas.filter(t => t.estado === 'done')

    return (
        <div>
            <button>Nueva tarea</button>
            <div>
                <Columna estadoTarea="to do" tareasGrupo={tareasTodo}></Columna>
                <Columna estadoTarea="in progress" tareasGrupo={tareasInProgress}></Columna>
                <Columna estadoTarea="done" tareasGrupo={tareasDone}></Columna>
            </div>
        </div>
    )

}

export default Gestor