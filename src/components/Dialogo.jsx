import Api from '../Api'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

function Dialogo({ open, gestionarCierre, idTarea, onDelete, onUpdate, onCreate }) {
    const refNombre = useRef(null)
    const refDescr = useRef(null)
    const refEstado = useRef(null)
    const refPrioridad = useRef(null)
    const refCategoria = useRef(null)
    const refDeadline = useRef(null)

    const [prioridadSeleccionada, setPrioridadSeleccionada] = useState(1)

    function gestionarClickEliminar() {
        onDelete(idTarea)
    }

    function gestionarGuardar() {
        const nombre = refNombre.current.innerText
        const descripcion = refDescr.current.value
        const categoria = refCategoria.current.value
        const deadline = refDeadline.current.value
            ? new Date(refDeadline.current.value).toISOString()
            : null
        const estado = refEstado.current.value
        const prioridad = Number(refPrioridad.current.value)

        const data = {
            nombre,
            descripcion,
            categoria,
            deadline,
            estado,
            prioridad
        }

        if (idTarea) {
            onUpdate(idTarea, data)
        } else {
            onCreate(data)
        }
    }

    const seleccionarPrioridad = (valor) => {
        setPrioridadSeleccionada(valor)
        if (refPrioridad.current) {
            refPrioridad.current.value = String(valor)
        }
    }

    useEffect(() => {
        ;(async () => {
            if (idTarea == null) {
                if (refNombre.current) refNombre.current.innerText = 'Nombre tarea'
                if (refDescr.current) refDescr.current.value = ''
                if (refCategoria.current) refCategoria.current.value = ''
                if (refDeadline.current) refDeadline.current.value = ''
                if (refEstado.current) refEstado.current.value = 'to do'
                if (refPrioridad.current) refPrioridad.current.value = '1'
                setPrioridadSeleccionada(1)
                return
            }

            const t = await Api.getTask(idTarea)
            refNombre.current.innerText = t.nombre ?? ''
            refDescr.current.value = t.descripcion ?? ''
            refCategoria.current.value = t.categoria ?? ''
            refDeadline.current.value = t.deadline ? t.deadline.slice(0, 10) : ''
            refEstado.current.value = t.estado ?? 'to do'
            refPrioridad.current.value = String(t.prioridad ?? 1)
            setPrioridadSeleccionada(Number(t.prioridad ?? 1))
        })()
    }, [idTarea, open])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={gestionarCierre}
            ></div>

            <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {idTarea ? 'Editar tarea' : 'Nueva tarea'}
                        </p>
                        <div
                            ref={refNombre}
                            className="mt-1 min-h-[40px] text-2xl font-bold text-slate-800 outline-none dark:text-slate-100"
                            contentEditable
                            suppressContentEditableWarning
                        >
                            Nombre tarea
                        </div>
                    </div>

                    <button
                        onClick={gestionarCierre}
                        className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        Cerrar
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Descripción
                        </label>
                        <textarea
                            ref={refDescr}
                            placeholder="Descripción"
                            rows={4}
                            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-400 dark:focus:ring-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Estado
                        </label>
                        <select
                            ref={refEstado}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-400 dark:focus:ring-slate-700"
                        >
                            <option value="to do">To do</option>
                            <option value="in progress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Prioridad
                        </label>

                        <input ref={refPrioridad} type="hidden" defaultValue="1" />

                        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800">
                            <button
                                type="button"
                                onClick={() => seleccionarPrioridad(1)}
                                className={`
                                    cursor-pointer rounded-xl px-3 py-3 text-sm font-medium transition
                                    ${prioridadSeleccionada === 1
                                        ? 'bg-green-500 text-white shadow-sm'
                                        : 'bg-transparent text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700'
                                    }
                                `}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Baja
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => seleccionarPrioridad(2)}
                                className={`
                                    cursor-pointer rounded-xl px-3 py-3 text-sm font-medium transition
                                    ${prioridadSeleccionada === 2
                                        ? 'bg-yellow-400 text-slate-900 shadow-sm'
                                        : 'bg-transparent text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700'
                                    }
                                `}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Media
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => seleccionarPrioridad(3)}
                                className={`
                                    cursor-pointer rounded-xl px-3 py-3 text-sm font-medium transition
                                    ${prioridadSeleccionada === 3
                                        ? 'bg-red-500 text-white shadow-sm'
                                        : 'bg-transparent text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700'
                                    }
                                `}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Alta
                                </span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Categoría
                        </label>
                        <input
                            ref={refCategoria}
                            type="text"
                            placeholder="Categoría"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-400 dark:focus:ring-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Deadline
                        </label>
                        <input
                            ref={refDeadline}
                            type="date"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-400 dark:focus:ring-slate-700"
                        />
                    </div>
                </div>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    {idTarea && (
                        <button
                            className="cursor-pointer rounded-xl bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600"
                            onClick={gestionarClickEliminar}
                        >
                            Eliminar
                        </button>
                    )}

                    <button
                        className="cursor-pointer rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={gestionarCierre}
                    >
                        Cancelar
                    </button>

                    <button
                        className="cursor-pointer rounded-xl bg-slate-900 px-4 py-3 font-medium text-white shadow-md transition hover:bg-slate-800 hover:shadow-lg dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                        onClick={gestionarGuardar}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
Dialogo.propTypes = {
    open: PropTypes.boolean.isRequired,
    gestionarCierre: PropTypes.func.isRequired,
    idTarea: PropTypes.number,
    onDelete: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired
}

export default Dialogo