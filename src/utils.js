
export const filterByStatus = (taskList, status) => {
    return taskList.filter(t => t.estado === status)
}