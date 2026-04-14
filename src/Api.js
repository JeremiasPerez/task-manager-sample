
const baseUrl = import.meta.env.VITE_BACKEND_URL
const taskUrl = `${baseUrl}/tareas`
const authUrl = `${baseUrl}/auth`

class Api {
    static async getAllTasks(){
        const ret = await fetch(taskUrl, {
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        const tareas = await ret.json()
        return tareas
    }

    static async getTask(id){
        const ret = await fetch(`${taskUrl}/${id}`,{
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        const tareas = await ret.json()
        return tareas
    }

    static async deleteTask(id){
        const ret = await fetch(`${taskUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        return ret.ok
    }

    static async createTask(data){
        const ret = await fetch(taskUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        const t = await ret.json()
        return t
    }

    static async updateTask(id, cambios){
        const ret = await fetch(taskUrl+'/'+id, {
            method: 'PATCH',
            body: JSON.stringify(cambios),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        const t = await ret.json()
        return t
    }

    static async login(user, pass){
        const datos = {
            email: user,
            password: pass,
        }
        const response = await fetch(authUrl+ '/login', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const r = await response.json()
        return r
    }

    static async register(user, pass){
        const datos = {
            email: user,
            password: pass,
        }
        const response = await fetch(authUrl+'/registro', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return await response.json()
    }
}

export default Api