
import '../styles/Tarea.css'

function Tarea({ infoTarea }){

    const prioridades = ['baja', 'media', 'alta']
    const url = 'https://api.dicebear.com/9.x/toon-head/png?seed=' + infoTarea.responsable
    return (
        <div className="tarea">
            <span className="nombreTarea">{infoTarea.nombre}</span>
            <div className="detallesTarea">
                <div data-prioridad={infoTarea.prioridad} className="prioridad">{prioridades[infoTarea.prioridad-1]}</div>
                <div className="categoria">{infoTarea.categoria}</div>
            </div>
            <img className="avatarResponsable" src={url}></img>
        </div>
    )
}

export default Tarea