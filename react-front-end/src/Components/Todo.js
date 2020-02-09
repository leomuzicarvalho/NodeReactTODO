import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import {TodoContext} from '../Contexts/TodoContext'
import { getUnixTime } from 'date-fns'


const TodoList = props =>{

    const [todos, setTodos] = useContext(TodoContext)

    const useStyles = makeStyles({
        card: {
            background:'#8f8fff',
            width: '100%',
            padding: '10px',
            position: 'relative'
        },
        box: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '10px',
        },
        icons: {
            position: 'absolute',
            right: '0',
            top: '0'
        }
    })

    const deleteTodo = () =>{

        fetch('http://localhost:3000/todos/deleteTODO/' + props.id , {
            method: 'DELETE',
        }).then(response => {
            console.log(response)
            const element = todos.find((element => element._id == props.id))
            const index = todos.indexOf(element)
            const array = [...todos];
            if (index !== -1) {
                array.splice(index, 1)
                setTodos(array)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    const handleDelete = e =>{
        deleteTodo()
    }

    const classes = useStyles()

    return(
        
        <Box className={classes.box}>
            <Card className={classes.card}>
                <IconButton className={classes.icons} aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>Deadline: {props.deadline}</p>
            </Card>
        </Box>
    )

}

export default TodoList