
import '../styles/Dialogo.css'
import {useEffect, useRef} from 'react'

function Dialogo({open, gestionarCierre, idTarea, onDelete}) {

    const estadoDialogo = open ? 'mostrar' : 'ocultar'

    const refNombre = useRef(null)
    const refDescr = useRef(null)

    function gestionarClickEliminar(){
        onDelete(idTarea)
    }

    useEffect(() => {
        (async () => {
            if (idTarea == null) return
            const ret = await fetch('http://localhost:3001/api/tareas/'+idTarea)
            const t = await ret.json()
            refNombre.current.innerText = t.nombre
            refDescr.current.defaultValue = t.descripcion
            console.log(t)
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
                    <select>
                        <option value="to do">To do</option>
                        <option value="in progress">In progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label>Prioridad</label>
                    <select>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                <div>
                    <label>Categoría</label><input type="text" placeholder='Categoría'></input>
                </div>
                <div>
                    <label>Responsable</label><input type="text" placeholder='Responsable'></input>
                </div>
                <div>
                    <label>Deadline</label><input type="date" ></input>
                </div>
                <div>
                    <button className="boton" onClick={gestionarCierre}>Cerrar</button>
                    <button  className="boton">Guardar</button>
                    <button onClick={gestionarClickEliminar} className="boton">Eliminar</button>
                </div>
            </div>
        </div>
        
    )
}

export default Dialogo