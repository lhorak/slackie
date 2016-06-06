/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {PropTypes} from 'react'


const Input = (props) => {
    return (
        <div>
            {props.label && <span>{props.label}</span>}
            <input type="text" value={props.value} onChange={props.onChange} />
            {props.description && <span>{props.descriiption}</span>}
        </div>
    )
};

Input.propTypes = {
    value: PropTypes.any.requ    
}


export default Input