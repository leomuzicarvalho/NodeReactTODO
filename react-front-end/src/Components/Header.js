import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Header = () => {

    const addStyles = makeStyles({

        menu : {

            width: '100%',
            background: '#f4f4f4',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px',
            background: '#4c4c4c',
            color: '#f4f4f4',


        },

    })

    const styles = addStyles()

    return(
        <>
        <div className={styles.menu}>
            <h3>Welcome to the TODO ReactJS + NodeJS + MongoDB app</h3>
        </div>
        </>
    )

}


export default Header