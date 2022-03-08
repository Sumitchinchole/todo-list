export const addTodo = (data) => {
    return {
        type : "ADD_TODO",
        payload: {
           data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type : "DELETE_TODO",
        payload : {
            id : id
        }
    }
}