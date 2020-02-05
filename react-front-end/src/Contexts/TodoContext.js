import React, {useState, useEffect, createContext} from 'react';

export const TodoContext = createContext()

export const TodoProvider = props =>{

    const getTodos = async () => {
        try{
            const response = await fetch('http://localhost:3000/todos/all')
            const data = await response.json()
            setTodos(data)
        } catch(e){
            console.log(e)
        }
        
    }

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [todos])

    return(
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}