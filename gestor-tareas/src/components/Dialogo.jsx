
import '../styles/Dialogo.css'

function Dialogo({open, gestionarCierre}) {

    const estadoDialogo = open ? 'mostrar' : 'ocultar'

    return (
        <div className={estadoDialogo + ' dialogContainer'}>
            <div className="overlay"></div>
            <div className='contenidoDialogo'>
                <div className="nombreTarea" contentEditable>Nombre tarea</div>
                <div>
                    <label>Descripción</label><input type="text" placeholder='Descripción'></input>
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
                    <button onClick={gestionarCierre}>Cerrar</button>
                    <button >Guardar</button>
                    <button >Eliminar</button>
                </div>
            </div>
        </div>
        
    )
}

export default Dialogo