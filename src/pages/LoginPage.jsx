

import {useRef} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function LoginPage () {


    const token = localStorage.getItem('token')
    if (token != null){
        return <Navigate to="/"></Navigate>
    }

    const inputUsuario = useRef(null)
    const inputPass = useRef(null)
    const navigate = useNavigate()


    const handleClick = async () => {

        const datos = {
            email: inputUsuario.current.value,
            password: inputPass.current.value,
        }
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const r = await response.json()
        if(r.error != null) {
            Swal.fire({
                title: "Error!",
                text: r.error,
                icon: "error"
            });
            return 
        }
        localStorage.setItem('token', r.token)
        navigate('/')
        console.log('ok')
    }

    return (
        <>
            <label>Usuario:</label><input ref={inputUsuario} type="text"></input><br/>
            <label>Contraseña:</label><input ref={inputPass} type="password"></input><br/>
            <button onClick={handleClick}>Log in</button>
        </>
    )
}

export default LoginPage