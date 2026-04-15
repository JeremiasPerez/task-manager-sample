import PropTypes from "prop-types"

function Tarea({ infoTarea, gestionarClicEnTarea, setIdTareaDrag }) {
    const manageClick = () => {
        gestionarClicEnTarea(infoTarea.id)
    }

    const prioridades = ['baja', 'media', 'alta']

    return (
        <button
            draggable="true"
            onDragStart={() => {setIdTareaDrag(infoTarea.id)}}
            onClick={manageClick}
            className="
                cursor-pointer w-full rounded-2xl border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                p-4 text-left
                shadow-sm transition
                hover:shadow-lg
                hover:border-slate-300 dark:hover:border-slate-700
                active:scale-[0.99]
            "
        >
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 break-words">
                    {infoTarea.nombre}
                </h3>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
                <span
                    data-prioridad={infoTarea.prioridad}
                    className={`
                        inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium
                        ${infoTarea.prioridad === 1 ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300' : ''}
                        ${infoTarea.prioridad === 2 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300' : ''}
                        ${infoTarea.prioridad === 3 ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300' : ''}
                    `}
                >
                    {prioridades[infoTarea.prioridad - 1]}
                </span>

                {infoTarea.categoria != null ? <span className="truncate rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {infoTarea.categoria}
                </span> : <></>}
            </div>
        </button>
    )
}
Tarea.propTypes = {
    infoTarea: PropTypes.object.isRequired,
    gestionarClicEnTarea: PropTypes.func.isRequired,
    setIdTareaDrag: PropTypes.func.isRequired
}

export default Tarea