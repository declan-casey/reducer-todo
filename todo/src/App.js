import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"
import React, {useReducer} from "react"
import Reducer, {InitialState} from "./reducers/index"
import actions from "./actions/index"

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  
  const addTodo = (todo) => {
    dispatch(actions.setTodo(todo))
  }

  const killTodo = () => {
    dispatch(actions.clearTodo())
  }

  const finishTodo = (todoID) => {
    dispatch(actions.setComplete(todoID))
  }
  return (
    <div className="App">
      <TodoForm addTodo = {addTodo}  killTodo={killTodo}/>
      <TodoList finishTodo= {finishTodo} listTodo = {state.todos}/>
    </div>
  );
}

export default App;
