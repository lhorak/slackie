/**
 * Created by pupa on 6/7/16.
 */

// NPM imports
import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import TextareaAutosize from 'react-textarea-autosize';

class MessageComposer extends Component {

    handleEnter = (e) => {
        if (e.keyCode === 13 && (!e.shiftKey && !e.ctrlKey && !e.altKey)) {
            e.preventDefault();
            this.props.onSend(e.target.value);
            e.target.value = '';
        }
    };
    render() {
        return (
            <div style={[styles.base, this.props.style]}>
               <TextareaAutosize
                   style={styles.textarea}
                   onKeyDown={this.handleEnter}/>
            </div>
        );
    }
}

MessageComposer.propTypes = {
    onSend: PropTypes.func.isRequired
};
MessageComposer.defaultProps = {};

const styles = {
    base: {
        width: '100%',
        background: '#fff',
        padding: '.5rem 2rem'
    },
    textarea: {
        width: '100%',
        padding: '.6rem',
        boxShadow: 'rgb(228, 228, 228) 0px 0px 0px 2px',
        border: 'none',
        minHeight: '2.2rem',
        maxHeight: '5.2rem',
        fontSize: '.9rem',
        lineHeight: '1rem',
        borderRadius: '.3rem',
        resize: 'none',
        outline: 'none',
        color: '#555459',
        fontFamily: 'Lato',

        ':focus': {
            outline: 'none',
            boxShadow: '#555459 0px 0px 0px 2px'
        }
    }
};

export default Radium(MessageComposer);
