import React from 'react'
import Todo from './Todo'

function TodoList({finishTodo, listTodo}) {
    return (
        <div>
            {listTodo.map(todo => <Todo key={todo.id} todo={todo} finishTodo = {finishTodo}/>)}
                
        </div>
    )
}

export default TodoList
