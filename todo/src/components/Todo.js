import React from 'react'

function Todo({todo, finishTodo}) {
    return (
        <div
        onClick = {() => finishTodo(todo.id)}
        className = {`task ${todo.completed ? "completed" : ""}`}>
            <p>{todo.todo}</p>
            {` ${todo.completed ? "Task completed" : ""}`}
        </div>
    )
}

export default Todo
