import ThemeSelector from "./ThemeSelector";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const gestionarLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav className="
            w-full px-6 py-3
            flex items-center justify-between
            bg-white/80 dark:bg-slate-900/80
            backdrop-blur
            border-b border-slate-200 dark:border-slate-800
            shadow-sm
        ">
            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Gestor de tareas
            </div>

            <div className="flex items-center gap-4">

                {token == null ? (
                    <>
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition
                                text-slate-700 dark:text-slate-300
                                hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition
                                bg-slate-900 text-white
                                hover:bg-slate-800
                                dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            Register
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={gestionarLogout}
                        className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition
                            bg-red-500 text-white
                            hover:bg-red-600
                            shadow-sm hover:shadow"
                    >
                        Logout
                    </button>
                )}
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <ThemeSelector />
            </div>
        </nav>
    )
}