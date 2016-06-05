import React from 'react'
import Radium from 'radium'
import FontAwesome from 'react-fontawesome'

const AddButton = props => {
    return (
        <button style={styles.base} onClick={props.action}>
            <FontAwesome name="plus"/>
        </button>
    );
}


const iconSize = .6;
const size     = iconSize * 1.8;

const styles = {
    base: {
        display     : 'inline-block',
        background  : 'transparent',
        outline     : 'none',
        border      : 'none',
        float       : 'right',
        borderRadius: '50%',
        border      : '2px solid rgba(255,255,255,.7)',
        color       : 'rgba(255,255,255,.7)',
        fontSize    : `${iconSize}rem`,
        width       : `${size}rem`,
        height      : `${size}rem`,
        textAlign   : 'center',
        padding     : 0,

        ':hover': {
            border: '2px solid rgba(255,255,255,1)',
            color : 'rgba(255,255,255,1)'
        }
    }
}

export default Radium(AddButton)