
import {ContextoTema} from './ThemeManager.jsx'
import {useContext} from 'react'

function ThemeSelector (){
    const {tema, cambiarTema} = useContext(ContextoTema)

    return (
        <button onClick={cambiarTema}>{tema == 'dark' ? '☀️ claro' : '🌙 oscuro'}</button>
    )

}

export default ThemeSelector