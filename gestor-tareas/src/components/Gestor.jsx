
import {useState, useEffect} from 'react'
//import {listaTareas} from '../listaTareas.js'
import Columna from './Columna.jsx'
import Dialogo from './Dialogo.jsx'
import '../styles/Gestor.css'

function Gestor(){

    const [abierto, setAbierto] = useState(false)
    const [listaTareas, setListaTareas] = useState([])
    const [idTarea, setIdTarea] = useState(null)

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

    const gestionarClicEnTarea = (id) => {
        setIdTarea(id)
        setAbierto(true)
    }

    return (
        <div>
            <button onClick={gestionarClickNuevaTarea}>Nueva tarea</button>
            <div className="contenedorColumnas">
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} ClicestadoTarea="to do" tareasGrupo={tareasTodo}></Columna>
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} estadoTarea="in progress" tareasGrupo={tareasInProgress}></Columna>
                <Columna gestionarClicEnTarea={gestionarClicEnTarea} estadoTarea="done" tareasGrupo={tareasDone}></Columna>
            </div>
            <Dialogo open={abierto} idTarea={idTarea} gestionarCierre={cerrarDialogo}></Dialogo>
        </div>
    )

}

export default Gestor