

import {useRef} from 'react'

function Login () {

    const inputUsuario = useRef(null)
    const inputPass = useRef(null)

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
        localStorage.setItem('token', r.token)
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

export default Login