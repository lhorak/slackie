/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {PropTypes} from 'react'
import Radium from 'radium'

const Input = (props) => {

    const handleEnterKey = (event) => {
        console.log(event.keyCode);
        if (props.onEnterKey && event.keyCode === 13) {
            console.log('ener has been hit!!');
            event.preventDefault();
            props.onEnterKey();
        }
        else {
            return;
        }
    };

    return (
        <div style={styles.base}>
            {
                props.label && <span style={styles.label}>{props.label}{props.isOptional &&
                <span style={styles.optionalMessage}>(optional)</span>}</span>
            }
            <input
                style={styles.input}
                type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                onKeyDown={handleEnterKey}/>
            {props.description && <span style={styles.description}>{props.description}</span>}
        </div>
    )
};


Input.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    onEnterKey: PropTypes.func
};

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
        border      : '1px solid #E4E4E4',
        borderRadius: '.3rem',
        padding  : '.75rem 1rem',
        fontSize: '1.1rem',

        ':focus': {
            outline: 'none',
            border: '1px solid #0E4250',
        }
    },
    label          : {
        display  : 'inline-block',
        width    : '100%',
        fontSize : '1.1rem',
        textAlign: 'left',
        padding  : '.5rem 0'
    },
    description    : {
        display  : 'inline-block',
        width    : '100%',
        fontSize : '.85rem',
        textAlign: 'left',
        padding  : '.2rem 0',
        color    : '#A8A8A8'
    },
    optionalMessage: {
        display   : 'inline-block',
        fontSize  : '.9rem',
        marginTop: '-0.1rem',
        textAlign : 'left',
        paddingLeft: '.5rem',
        color     : '#A8A8A8'
    }
}


export default Radium(Input);