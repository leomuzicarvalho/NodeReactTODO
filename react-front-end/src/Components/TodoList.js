import React, {useContext} from 'react'
import {TodoContext} from '../Contexts/TodoContext'


const TodoList = () =>{

    const val = useContext(TodoContext)

    return(
        <div className="allTodos">
            <h1>those are my todos: {val}</h1>
        </div>
    )
}

export default TodoList