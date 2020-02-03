import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';



const Form = () =>{

    const [selectedDate, setSelectedDate] = React.useState(new Date())

    const addStyle = makeStyles({
        card : {
            background: '#f4f4f4',
            color: 'black',
            padding: '10px',
            marginTop: '10px',
            textAlign: 'center',
        },

    })

    const handleDateChange = date => {
        setSelectedDate(date);
      };

    const style = addStyle()

    return (
        <Card className={style.card}>
            <form>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button variant="outlined">Create TODO</Button>
                
            </form>
        </Card>
    )
}

export default Form