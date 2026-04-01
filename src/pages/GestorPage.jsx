
import { Navigate } from 'react-router-dom'

import Gestor from '../components/Gestor'

export default function GestorPage () {

    const token = localStorage.getItem('token')
    if (token == null){
        return <Navigate to="/login"></Navigate>
    }

    return (
        <Gestor></Gestor>
    )
}