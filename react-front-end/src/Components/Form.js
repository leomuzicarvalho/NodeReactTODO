import React, {useState, useContext} from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles'
import {TodoContext} from '../Contexts/TodoContext'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Form = () =>{

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useContext(TodoContext)

    const addStyle = makeStyles({
        card : {
            background: '#f4f4f4',
            color: 'black',
            padding: '10px',
            marginTop: '10px',
            textAlign: 'center',
        },

        input : {
            margin: '10px',
        },

        button: {
            padding: '15px',
            margin: '20px'
        }

    })

    const handleDateChange = date => {
        setSelectedDate(date);
      };
      
    const handleTitle = e => {
        setTitle(e.target.value)
    };

    const handleDescription = e => {
        setDescription(e.target.value)
    };

    const submitTodo = e =>{
        e.preventDefault()

        fetch('http://localhost:3000/todos/createTODO', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                deadline: selectedDate,
            })
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })

        setTodos([...todos, { '_id': '123919519','title': title, 'description': description, 'deadline': selectedDate}])

        setTitle("")
        setDescription("")

    }

    const style = addStyle()

    return (
        <Card className={style.card}>
            <h2>Create TODO</h2>
            <form autoComplete="off">
                <TextField className={style.input} id="title" label="Title" variant="outlined" value={title} onChange={handleTitle} required/>
                <TextField className={style.input} multiline  id="description" label="Description" variant="outlined" value={description} onChange={handleDescription} required/>
                <MuiPickersUtilsProvider className={style.input}  utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="deadline"
                        label="Select the deadline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button type="submit" className={style.button} onClick={submitTodo} variant="outlined">Create TODO</Button>
                
            </form>
        </Card>
    )
}

export default Form