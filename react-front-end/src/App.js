import React, { useState } from 'react'
import {TodoProvider} from './Contexts/TodoContext'
import TodoList from './Components/TodoList'
import Form from './Components/Form'
import { makeStyles } from '@material-ui/core/styles'

function App() {

   const useStyle = makeStyles({
      app : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      },

      form : {
        flex: '0.3',
      },

      list : {
        flex: '1',
      }
   })

   const style = useStyle()

  return (
    <div className={style.app}>
      <TodoProvider>
      <div className={style.form}>
        <Form/>
      </div>
      
        <div className={style.list}>
          <TodoList/>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
