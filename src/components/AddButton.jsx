import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';
import FullscreenModal from './FullscreenModal';


class AddButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false
        }
    };

    openModal = () => {
        console.log('setting isModalOpened to true');
        this.setState({isModalOpened: true});
        console.log('state of modal is', this.state.isModalOpened);
    };

    closeModal = () => {
        console.log('setting isModalOpened to false');
        this.setState({isModalOpened: false});
        console.log('state of modal is', this.state.isModalOpened);
    };

    render() {
        return (
            <button style={styles.base} onClick={this.openModal}>
                <FontAwesome name="plus"/>
                {this.state.isModalOpened && <FullscreenModal onClose={this.closeModal}/>}
            </button>
        );
    };
}

AddButton.propTypes    = {};
AddButton.defaultProps = {};


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