
import {useState, useEffect} from 'react'
//import {listaTareas} from '../listaTareas.js'
import Columna from './Columna.jsx'
import Dialogo from './Dialogo.jsx'
import ThemeSelector from './ThemeSelector.jsx'
import Api from '../Api.js'
import { filterByStatus } from '../utils.js'

function Gestor(){

    const [abierto, setAbierto] = useState(false)
    const [listaTareas, setListaTareas] = useState([])
    const [idTarea, setIdTarea] = useState(null)

    useEffect(() => {
        (async () => {
            const tareas = await Api.getAllTasks()
            setListaTareas(tareas)
        })()
    }, [])

    const onDelete = async (id) => {
        const success = await Api.deleteTask(id)
        if (!success) return
        const copia = [...listaTareas]
        const pos = copia.findIndex(t => t.id === id)
        copia.splice(pos,1)
        setListaTareas(copia)
        cerrarDialogo()
    }

    const tareasTodo = filterByStatus(listaTareas, 'to do')
    const tareasInProgress = filterByStatus(listaTareas, 'in progress')
    const tareasDone = filterByStatus(listaTareas, 'done')

    const gestionarClickNuevaTarea = () => {
        setAbierto(true)
    }

    const cerrarDialogo = () => {
        setAbierto(false)
    }

    const gestionarClicEnTarea = (id) => {
        setIdTarea(id)
        setAbierto(true)
    }

    return (
        <div className='dark:underline'>
            <ThemeSelector></ThemeSelector>
            <button onClick={gestionarClickNuevaTarea}>Nueva tarea</button>
            <div className=" contenedorColumnas flex flex-col md:flex-row gap-[20px] h-[80vh]">
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} estadoTarea="to do" tareasGrupo={tareasTodo}></Columna>
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} estadoTarea="in progress" tareasGrupo={tareasInProgress}></Columna>
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} estadoTarea="done" tareasGrupo={tareasDone}></Columna>
            </div>
            <Dialogo onDelete={onDelete} open={abierto} idTarea={idTarea} gestionarCierre={cerrarDialogo}></Dialogo>
        </div>
    )

}

export default Gestor