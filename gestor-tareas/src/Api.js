
const baseUrl = 'http://localhost:3001/api/tareas'

class Api {
    static async getAllTasks(){
        const ret = await fetch(baseUrl)
        const tareas = await ret.json()
        return tareas
    }

    static async getTask(id){
        const ret = await fetch(`${baseUrl}/${id}`)
        const tareas = await ret.json()
        return tareas
    }

    static async deleteTask(id){
        const ret = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        })
        return ret.ok
    }

    static async createTask(data){
        const ret = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const t = await ret.json()
        return t
    }

    static async updateTask(id, cambios){
        const ret = await fetch(baseUrl+'/'+id, {
            method: 'PATCH',
            body: JSON.stringify(cambios),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const t = await ret.json()
        return t
    }
}

export default Api