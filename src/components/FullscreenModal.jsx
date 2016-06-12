import React, {
    Component,
    PropTypes
} from 'react';

import Radium from 'radium'
import MaterialIcon from './MaterialIcon'
import { Scrollbars } from 'react-custom-scrollbars';

class FullscreenModal extends Component {
    onEscape = ({keyCode}) => {
        if (keyCode === 27) {
            this.props.onClose();
        }
    };

    onCrossClick = (ev) => {
        ev.stopPropagation();
        this.props.onClose();
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onEscape);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onEscape);
    }

    render() {
        return (
            <div style={styles.base}>
                <MaterialIcon style={styles.closeButton} name="close" size="4rem" onClick={this.onCrossClick}/>

                <div style={styles.content}>
                        {this.props.children}
                </div>
            </div>
        );
    }
}

FullscreenModal.propTypes    = {};
FullscreenModal.defaultProps = {};


const styles = {
    base       : {
        position       : 'fixed',
        top            : 0, right: 0, bottom: 0, left: 0,
        backgroundColor: '#fff',
        zIndex         : 10000,
        color          : 'black',
        padding        : '2rem',
        display        : 'flex',
        alignItems     : 'center',
        justifyContent : 'center'
    },
    content    : {
        width       : '100%',
        maxWidth    : '650px',
        marginBottom: '100px',
        maxHeight   : '75%',
        height      : '75%',
        overflow    : 'hidden'
    },
    closeButton: {
        position: 'absolute',
        right   : 0,
        top     : 0,
        color   : 'black',
        padding : '20px 30px',
        fontSize: '2rem',
        cursor  : 'pointer'
    }
}


const CloseButton = ({click}) => (
    <a style={styles.closeButton} onClick={click}><FontAwesome name="close"/></a>
);

export default Radium(FullscreenModal);