
import {useState, useEffect} from 'react'
//import {listaTareas} from '../listaTareas.js'
import Columna from './Columna.jsx'
import Dialogo from './Dialogo.jsx'
import '../styles/Gestor.css'

function Gestor(){

    const [abierto, setAbierto] = useState(false)
    const [listaTareas, setListaTareas] = useState([])

    useEffect(() => {
        (async () => {
            const ret = await fetch('http://localhost:3001/api/tareas')
            const tareas = await ret.json()
            setListaTareas(tareas)
        })()
    }, [])

    const tareasTodo = listaTareas.filter(t => t.estado === 'to do')
    const tareasInProgress = listaTareas.filter(t => t.estado === 'in progress')
    const tareasDone = listaTareas.filter(t => t.estado === 'done')

    const gestionarClickNuevaTarea = () => {
        setAbierto(true)
    }

    const cerrarDialogo = () => {
        setAbierto(false)
    }

    return (
        <div>
            <button onClick={gestionarClickNuevaTarea}>Nueva tarea</button>
            <div className="contenedorColumnas">
                <Columna estadoTarea="to do" tareasGrupo={tareasTodo}></Columna>
                <Columna estadoTarea="in progress" tareasGrupo={tareasInProgress}></Columna>
                <Columna estadoTarea="done" tareasGrupo={tareasDone}></Columna>
            </div>
            <Dialogo open={abierto} gestionarCierre={cerrarDialogo}></Dialogo>
        </div>
    )

}

export default Gestor