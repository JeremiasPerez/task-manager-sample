import { ContextoTema } from './ThemeManager.jsx'
import { useContext } from 'react'

function ThemeSelector() {
    const { tema, cambiarTema } = useContext(ContextoTema)

    const esOscuro = tema === 'dark'

    return (
        <button
            onClick={cambiarTema}
            aria-label={esOscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            className={` cursor-pointer 
                relative inline-flex h-7 w-14 items-center rounded-full border transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                dark:focus:ring-offset-slate-900
                ${
                    esOscuro
                        ? 'bg-slate-700 border-slate-600'
                        : 'bg-slate-200 border-slate-300'
                }
            `}
        >
            <span
                className={`z-3000 
                    absolute left-1 text-lg transition-opacity duration-300
                    ${esOscuro ? 'opacity-0' : 'opacity-100'}
                `}
            >
                ☀️
            </span>

            <span
                className={`z-3000 text-lg 
                    absolute right-1 transition-opacity duration-300
                    ${esOscuro ? 'opacity-100' : 'opacity-0'}
                `}
            >
                🌙
            </span>

            <span
                className={`
                    inline-block h-5 w-5 transform rounded-full transition-all duration-300
                    ${esOscuro ? 'translate-x-8' : 'translate-x-1'}
                `}
            />
        </button>
    )
}

export default ThemeSelector