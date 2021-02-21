export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'start'})

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return(dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}