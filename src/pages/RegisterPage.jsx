import { useRef } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Api from '../Api'

export default function RegisterPage() {
    const navigate = useNavigate()
    const inputUsuario = useRef(null)
    const inputPass = useRef(null)

    const token = localStorage.getItem('token')
    if (token != null) {
        return <Navigate to="/" />
    }

    const handleClick = async () => {
        const r = await Api.register(inputUsuario.current.value,inputPass.current.value)
        navigate('/login')
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
                
                <div className="w-full max-w-md rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                    
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            Regístrate para empezar
                        </h1>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Usuario
                            </label>
                            <input
                                ref={inputUsuario}
                                type="text"
                                placeholder="Introduce tu email"
                                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 outline-none transition focus:border-slate-500 dark:focus:border-slate-400 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Contraseña
                            </label>
                            <input
                                ref={inputPass}
                                type="password"
                                placeholder="Introduce tu contraseña"
                                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 outline-none transition focus:border-slate-500 dark:focus:border-slate-400 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700"
                            />
                        </div>

                        <button
                            onClick={handleClick}
                            className="cursor-pointer w-full rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-3 font-medium shadow-md transition hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-lg active:scale-[0.99]"
                        >
                            Crear cuenta
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        ¿Ya tienes cuenta?{' '}
                        <span
                            onClick={() => navigate('/login')}
                            className="cursor-pointer font-medium text-slate-800 dark:text-slate-200 hover:underline"
                        >
                            Inicia sesión
                        </span>
                    </p>

                </div>
            </div>
        </>
    )
}