
import Api from '../Api'
import '../styles/Dialogo.css'
import {useEffect, useRef} from 'react'

function Dialogo({open, gestionarCierre, idTarea, onDelete, onUpdate, onCreate}) {
    const estadoDialogo = open ? 'mostrar' : 'ocultar'
    const refNombre = useRef(null)
    const refDescr = useRef(null)
    const refEstado = useRef(null)
    const refPrioridad = useRef(null)
    const refCategoria = useRef(null)
    const refDeadline = useRef(null)

    function gestionarClickEliminar(){
        onDelete(idTarea)
    }

    function gestionarGuardar(){
        const nombre = refNombre.current.innerText
        const descripcion = refDescr.current.value
        const categoria = refCategoria.current.value
        const deadline = refDeadline.current.value ? new Date(refDeadline.current.value).toISOString() : null
        const estado = refEstado.current.value
        const prioridad = Number(refPrioridad.current.value)

        const data = {
            nombre, descripcion, categoria, deadline, estado, prioridad
        }

        if (idTarea){
            onUpdate(idTarea, data)
        } else {
            onCreate(data)
        }
    }

    useEffect(() => {
        (async () => {
            if (idTarea == null) return
            const t = await Api.getTask(idTarea)
            refNombre.current.innerText = t.nombre
            refDescr.current.value = t.descripcion
            refCategoria.current.value = t.categoria
            refDeadline.current.value = t.deadline
            refEstado.current.value = t.estado
            refPrioridad.current.value = t.prioridad
        })()
    }, [idTarea])

    return (
        <div className={estadoDialogo + ' dialogContainer'}>
            <div className="overlay"></div>
            <div className='contenidoDialogo'>
                <div ref={refNombre} className="nombreTarea" contentEditable suppressContentEditableWarning>Nombre tarea</div>
                <div>
                    <label>Descripción</label><input ref={refDescr} type="text" placeholder='Descripción'></input>
                </div>
                <div>
                    <label>Estado</label>
                    <select ref={refEstado}>
                        <option value="to do">To do</option>
                        <option value="in progress">In progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label>Prioridad</label>
                    <select ref={refPrioridad}>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                <div>
                    <label>Categoría</label><input ref={refCategoria} type="text" placeholder='Categoría'></input>
                </div>
                <div>
                    <label>Deadline</label><input ref={refDeadline} type="date" ></input>
                </div>
                <div>
                    <button className="boton" onClick={gestionarCierre}>Cerrar</button>
                    <button  className="boton" onClick={gestionarGuardar}>Guardar</button>
                    <button onClick={gestionarClickEliminar} className="boton">Eliminar</button>
                </div>
            </div>
        </div>
        
    )
}

export default Dialogo