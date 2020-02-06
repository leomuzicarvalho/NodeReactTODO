import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styles } from '@material-ui/pickers/views/Calendar/Calendar'

const Footer = () => {

    const addStyle = makeStyles({
        footer : {
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#4c4c4c',
            color: '#f4f4f4',
            position: 'absolute',
            bottom: '0',
            width: '100%'
        },

        a : {
            textDecoration: 'none',
            color: 'inherit',
            transition: '0.3s all',
            '&:hover' : {
                color: '#8f8fff'
            }
        }
    })

    const styles = addStyle()

    return (
        <>
        <div className={styles.footer}>
            <h4>Created by <a className={styles.a} href='https://www.linkedin.com/in/leonardotmuzi/' target='_blank'>Leonardo Muzi</a></h4>
        </div>
        </>
    )
}

export default Footer