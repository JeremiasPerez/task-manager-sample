import Tarea from './Tarea.jsx'
import PropTypes from 'prop-types'

function Columna({ estadoTarea, tareasGrupo, gestionarClicEnTarea, setIdTareaDrag, gestionarDropTarea }) {

    const tareas = tareasGrupo.map((t) => (
        <Tarea
            key={t.id}
            gestionarClicEnTarea={gestionarClicEnTarea}
            infoTarea={t}
            setIdTareaDrag={setIdTareaDrag}
        />
    ))

    return (
        <div onDragOver={(e) => {e.preventDefault()}} onDrop={(e) => {gestionarDropTarea(estadoTarea)}} className="
            flex flex-col flex-1 min-w-[250px] max-h-full
            rounded-2xl
            bg-white/70 dark:bg-slate-900/70
            backdrop-blur
            border border-slate-200 dark:border-slate-800
            shadow-sm
            p-4
        ">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg capitalize text-slate-800 dark:text-slate-100">
                    {estadoTarea}
                </h2>

                <span className="
                    text-xs font-medium px-2 py-1 rounded-full
                    bg-slate-200 text-slate-700
                    dark:bg-slate-700 dark:text-slate-200
                ">
                    {tareas.length}
                </span>
            </div>

            {/* Lista tareas */}
            <div className="
                flex flex-col gap-3
                overflow-y-auto
                pr-1
            ">
                {tareas.length > 0 ? (
                    tareas
                ) : (
                    <div className="text-sm text-slate-400 dark:text-slate-500 text-center mt-4">
                        Sin tareas
                    </div>
                )}
            </div>
        </div>
    )
}
Columna.propTypes = {
    estadoTarea: PropTypes.string.isRequired,
    tareasGrupo: PropTypes.array.isRequired,
    gestionarClicEnTarea: PropTypes.func.isRequired,
    setIdTareaDrag: PropTypes.func.isRequired,
    gestionarDropTarea: PropTypes.func.isRequired,
}

export default Columna