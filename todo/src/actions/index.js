export const SET_TODO = "SET_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const ERASE_TODO = "ERASE_TODO"

const setTodo = (todo) => {

    const newTodo = {todo, id:Date.now(), completed: false}
    return({type:SET_TODO, payload:newTodo})
}

const setComplete = (id) => {
    return {type: COMPLETE_TODO, payload:id}
}

const clearTodo = () => {
    return {type: ERASE_TODO}
}

export default {
    setTodo: setTodo,
    setComplete: setComplete,
    clearTodo: clearTodo,
}