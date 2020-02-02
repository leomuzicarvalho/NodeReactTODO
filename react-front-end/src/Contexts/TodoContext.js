import React, {useState, useEffect, createContext} from 'react';

export const TodoContext = createContext()

export const TodoProvider = props =>{

    const getTodos = async () => {
        try{
            const response = await fetch('http://localhost:3000/todos/all')
            const data = await response.json()
            console.log(data)
        } catch(e){
            console.log(e)
        }
        
    }

    const [todos, setTodos] = useState(

    ) 

    useEffect(() => {
        getTodos();
    }, [])

    return(
        <TodoContext.Provider value={'Hi There'}>
            {props.children}
        </TodoContext.Provider>
    )
}