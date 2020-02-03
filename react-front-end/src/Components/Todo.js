import React, {useContext, useState} from 'react'
import {TodoContext} from '../Contexts/TodoContext'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'


const TodoList = props =>{

    const useStyles = makeStyles({
        card: {
            background:'#8f8fff',
            width: '30%',
            padding: '10px',
        },
        box: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '10px',
        },
    })

    const classes = useStyles()

    return(
        
        <Box className={classes.box}>
            <Card className={classes.card}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>Deadline: {props.deadline}</p>
            </Card>
        </Box>
    )

}

export default TodoList