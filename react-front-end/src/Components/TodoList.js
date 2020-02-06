import React, {useContext} from 'react'
import {TodoContext} from '../Contexts/TodoContext'
import Todo from './Todo'


const TodoList = () =>{

    const [todos,setTodos] = useContext(TodoContext)

    return(
        <>
        {todos.map(todo => (
            <Todo key={todo._id} title={todo.title} description={todo.description} deadline={ new Date(todo.deadline).toDateString()}/>
        ))} 
        </>
    )
}

export default TodoList