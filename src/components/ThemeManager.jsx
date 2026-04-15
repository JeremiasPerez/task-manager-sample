
import {createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
const ContextoTema = createContext(null)

function ThemeManager ({children}){

    const [tema, setTema] = useState('dark')

    const cambiarTema = () => {
        if (tema == 'dark') setTema('light')
        else setTema('dark')
    }

    useEffect(() => {
        const htmlTag = document.documentElement
        if (tema == 'light') htmlTag.classList.remove('dark')
        else htmlTag.classList.add('dark')
    }, [tema])

    return (
        <ContextoTema value={{tema, cambiarTema}}>
            {children}
        </ContextoTema>
    )
}
ThemeManager.propTypes = {
    children: PropTypes.any
}

export {ContextoTema, ThemeManager}