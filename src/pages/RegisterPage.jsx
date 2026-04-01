
import {useRef} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

export default function RegisterPage () {
    const navigate = useNavigate()
    const inputUsuario = useRef(null)
    const inputPass = useRef(null)

    const token = localStorage.getItem('token')
    if (token != null){
        return <Navigate to="/"></Navigate>
    }

    const handleClick = async () => {

        const datos = {
            email: inputUsuario.current.value,
            password: inputPass.current.value,
        }
        const response = await fetch('http://localhost:3000/api/auth/registro', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const r = await response.json()
        navigate('/login')
    }

    return (
        <>
            <label>Usuario:</label><input ref={inputUsuario} type="text"></input><br/>
            <label>Contraseña:</label><input ref={inputPass} type="password"></input><br/>
            <button onClick={handleClick}>Registro</button>
        </>
    )
}