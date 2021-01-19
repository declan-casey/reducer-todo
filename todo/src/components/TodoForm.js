import React, { useState, useReducer } from 'react'
import reducer, {initialState} from "../reducers/index"
import actions from "../actions/index"
import TodoList from "./TodoList"

// import {setTodo, completeTodo, clearTodo} from "../actions/index"

export default function TodoForm({killTodo, addTodo}) {

    const [todoInput, setTodoInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoInput);
        setTodoInput(''); 
    }

    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Get'er done</h1>
                <label>Todo: </label>
                <input
                type ="text"
                name = "newTitleText"
                onChange = {handleChange}
                value = {todoInput}
                ></input>
                <button>Submit</button>
                <button 
                onClick = {killTodo}>Clear</button>
            </form>
        </div>
    )
}
