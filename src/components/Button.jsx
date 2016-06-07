/**
 * Created by pupa on 6/7/16.
 */

// NPM imports
import React from 'react'
import Radium from 'radium'

const Button = props => {
    return (
      <button style={[styles.base, styles[props.kind]]} onClick={props.onClick} >{props.text}</button>
    );
};

const styles = {
    base: {
        padding: '.8rem .7rem',
        backgroundColor: '#2ab27b',
        borderRadius: '.3rem',
        color: '#ffffff',
        outline: 'none',
        fontSize: '1.2rem',
        fontWeight: '600',
        border: 'none',
        boxShadow: 'none',

        ':hover': {
            backgroundColor: '#2ab27b',
            border: 'none',
            outline: 'none',
            textShadow: '0 1px 1px rgba(0,0,0,.1)',
            boxShadow: 'inset 0 -2px 0 0 rgba(0,0,0,.5)'
        }
    },
    submit: {

    },
    cancel: {

    }
}

export default Radium(Button)