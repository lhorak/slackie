/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {PropTypes} from 'react'
import Radium from 'radium'

const Input = (props) => {
    return (
        <div style={styles.base}>
            {
                props.label && <span style={styles.label}>{props.label}{props.isOptional &&
                <span style={styles.optionalMessage}>(optional)</span>}</span>
            }
            <input style={styles.input} type="text" value={props.value} onChange={props.onChange}/>
            {props.description && <span style={styles.description}>{props.description}</span>}
        </div>
    )
};

Input.propTypes = {
    value: PropTypes.any.isRequired
}

const styles = {
    base           : {
        display     : 'block',
        width       : '100%',
        float       : 'left',
        marginBottom: '1.5rem'
    },
    input          : {
        display     : 'inline-block',
        width       : '100%',
        border      : '2px solid #E4E4E4',
        borderRadius: '.2rem',
        lineHeight  : '2rem',

        ':focus': {
            outline: 'none',
            border : '2px solid #0E4250',
        }
    },
    label          : {
        display  : 'inline-block',
        width    : '100%',
        fontSize : '1.3rem',
        textAlign: 'left',
        padding  : '.5rem 0'
    },
    description    : {
        display  : 'inline-block',
        width    : '100%',
        fontSize : '.8rem',
        textAlign: 'left',
        padding  : '.2rem 0',
        color    : '#A8A8A8'
    },
    optionalMessage: {
        display   : 'inline-block',
        fontSize  : '.9rem',
        lineHeight: '1.3rem',
        textAlign : 'left',
        padding   : '.5rem 0 .5rem .5rem',
        color     : '#A8A8A8'
    }
}


export default Radium(Input);