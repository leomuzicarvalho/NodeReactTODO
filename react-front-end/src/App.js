import React from 'react'
import {TodoProvider} from './Contexts/TodoContext'
import TodoList from './Components/TodoList'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { makeStyles } from '@material-ui/core/styles'

function App() {

   const useStyle = makeStyles({
      app : {
        display: 'unset',
        flexDirection: 'row',
        width: '100%',
        ['@media (min-width:1000px)']:{
          display: 'flex',
        }
      },

      form : {
        flex: '0.3',
      },

      list : {
        flex: '1',
        display: 'grid',
        gridTemplateAreas: '\'x x\'',
      }
   })

   const style = useStyle()

  return (
    <>
      <Header/>
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
      <Footer/>
    </>
  );
}

export default App;
