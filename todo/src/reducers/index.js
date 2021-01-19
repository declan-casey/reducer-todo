import {SET_TODO, COMPLETE_TODO, ERASE_TODO} from "../actions/index"

export const InitialState ={
    todos: [],
}
const reducer = (state, action) => {

    switch(action.type) {
        case(SET_TODO):
            return({...state, todos: [...state.todos, action.payload]});
        case(ERASE_TODO):
            return({...state, todos: [...state.todos.filter(item => {
                return (!item.completed)
            })]});
        case(COMPLETE_TODO):
            return({...state, todos: [...state.todos.map(item => {
                 if(item.id === action.payload) {
                    return {...item, completed: !item.completed}
                }
                return (item);
            })]});
        default:
            return(state);
    }
}

export default reducer;