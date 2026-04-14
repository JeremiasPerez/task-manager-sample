import { useState, useEffect } from 'react'
import Columna from './Columna.jsx'
import Dialogo from './Dialogo.jsx'
import Api from '../Api.js'
import { filterByStatus } from '../utils.js'
import Navigation from './Navigation.jsx'

function Gestor() {
    const [abierto, setAbierto] = useState(false)
    const [listaTareas, setListaTareas] = useState([])
    const [idTarea, setIdTarea] = useState(null)
    const [idTareaDrag, setIdTareaDrag] = useState(null)

    useEffect(() => {
        ;(async () => {
            const tareas = await Api.getAllTasks()
            setListaTareas(tareas)
        })()
    }, [])

    const onDelete = async (id) => {
        const success = await Api.deleteTask(id)
        if (!success) return

        const copia = [...listaTareas]
        const pos = copia.findIndex(t => t.id === id)
        copia.splice(pos, 1)
        setListaTareas(copia)
        cerrarDialogo()
    }

    const onUpdate = async (id, data) => {
        const t = await Api.updateTask(id, data)
        const copia = [...listaTareas]
        const pos = copia.findIndex(t => t.id === id)
        copia[pos] = t
        setListaTareas(copia)
        cerrarDialogo()
    }

    const onCreate = async (data) => {
        const t = await Api.createTask(data)
        const copia = [...listaTareas]
        copia.push(t)
        setListaTareas(copia)
        cerrarDialogo()
    }

    const tareasTodo = filterByStatus(listaTareas, 'to do')
    const tareasInProgress = filterByStatus(listaTareas, 'in progress')
    const tareasDone = filterByStatus(listaTareas, 'done')

    const gestionarClickNuevaTarea = () => {
        setIdTarea(null)
        setAbierto(true)
    }

    const cerrarDialogo = () => {
        setAbierto(false)
    }

    const gestionarClicEnTarea = (id) => {
        setIdTarea(id)
        setAbierto(true)
    }

    const gestionarDropTarea = (nuevoEstado) => {
        if (idTareaDrag == null) return
        onUpdate(idTareaDrag, {estado: nuevoEstado})
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <Navigation />

            <main className="px-4 py-6 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                Gestor de tareas
                            </h1>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Organiza tus tareas por estado de forma visual y sencilla
                            </p>
                        </div>

                        <button
                            onClick={gestionarClickNuevaTarea}
                            className="cursor-pointer rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:bg-slate-800 hover:shadow-lg active:scale-[0.99] dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            Nueva tarea
                        </button>
                    </div>

                    <div className="contenedorColumnas flex h-auto flex-col gap-5 md:h-[78vh] md:flex-row">
                        <Columna
                            gestionarClicEnTarea={gestionarClicEnTarea}
                            estadoTarea="to do"
                            tareasGrupo={tareasTodo}
                            setIdTareaDrag={setIdTareaDrag}
                            gestionarDropTarea={gestionarDropTarea}
                        />
                        <Columna
                            gestionarClicEnTarea={gestionarClicEnTarea}
                            estadoTarea="in progress"
                            tareasGrupo={tareasInProgress}
                            setIdTareaDrag={setIdTareaDrag}
                            gestionarDropTarea={gestionarDropTarea}
                        />
                        <Columna
                            gestionarClicEnTarea={gestionarClicEnTarea}
                            estadoTarea="done"
                            tareasGrupo={tareasDone}
                            setIdTareaDrag={setIdTareaDrag}
                            gestionarDropTarea={gestionarDropTarea}
                        />
                    </div>
                </div>

                <Dialogo
                    onDelete={onDelete}
                    open={abierto}
                    idTarea={idTarea}
                    gestionarCierre={cerrarDialogo}
                    onCreate={onCreate}
                    onUpdate={onUpdate}
                />
            </main>
        </div>
    )
}

export default Gestor