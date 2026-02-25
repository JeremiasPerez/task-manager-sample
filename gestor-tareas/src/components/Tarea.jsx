

function Tarea({ infoTarea }){

    const url = 'https://api.dicebear.com/9.x/toon-head/png?seed=' + infoTarea.responsable
    return (
        <div>
            <span>{infoTarea.nombre}</span>
            <span>{infoTarea.prioridad}</span>
            <span>{infoTarea.categoria}</span>
            <img src={url}></img>
        </div>
    )
}

export default Tarea