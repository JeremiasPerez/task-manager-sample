import { useRef } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navigation from '../components/Navigation'
import Api from '../Api'

function LoginPage() {
    const inputUsuario = useRef(null)
    const inputPass = useRef(null)
    const navigate = useNavigate()


    const token = localStorage.getItem('token')
    if (token != null) {
        return <Navigate to="/" />
    }


    const handleClick = async () => {
        const r = await Api.login(inputUsuario.current.value,inputPass.current.value)

        if (r.error != null) {
            Swal.fire({
                title: 'Error!',
                text: r.error,
                icon: 'error'
            })
            return
        }

        localStorage.setItem('token', r.token)
        navigate('/')
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="min-h-screen flex items-center justify-center px-4
                bg-gradient-to-br from-slate-100 via-white to-slate-200
                dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">

                <div className="w-full max-w-md rounded-2xl p-8
                    bg-white/90 dark:bg-slate-900/80
                    backdrop-blur
                    shadow-xl
                    border border-slate-200 dark:border-slate-800">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            Inicia sesión
                        </h1>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                <input
                                    ref={inputUsuario}
                                    type="text"
                                    placeholder="Introduce tu email"
                                    className="w-full rounded-xl px-4 py-3 outline-none transition
                                        bg-white dark:bg-slate-800
                                        text-slate-800 dark:text-slate-100
                                        border border-slate-300 dark:border-slate-700
                                        focus:border-slate-500 dark:focus:border-slate-400
                                        focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700"
                                />
                                Usuario
                            </label>
                            
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                <input
                                    ref={inputPass}
                                    type="password"
                                    placeholder="Introduce tu contraseña"
                                    className="w-full rounded-xl px-4 py-3 outline-none transition
                                        bg-white dark:bg-slate-800
                                        text-slate-800 dark:text-slate-100
                                        border border-slate-300 dark:border-slate-700
                                        focus:border-slate-500 dark:focus:border-slate-400
                                        focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700"
                                />
                                Contraseña
                            </label>
                            
                        </div>

                        <button
                            onClick={handleClick}
                            className="cursor-pointer w-full rounded-xl px-4 py-3 font-medium transition
                                bg-slate-900 text-white
                                hover:bg-slate-800
                                dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200
                                shadow-md hover:shadow-lg active:scale-[0.99]"
                        >
                            Log in
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        ¿Todavía sin cuenta?{' '}
                        <span
                            onClick={() => navigate('/register')}
                            className="cursor-pointer font-medium text-slate-800 dark:text-slate-200 hover:underline"
                        >
                            Regístrate
                        </span>
                    </p>
                </div>
            </div>
        </>
        
    )
}

export default LoginPage