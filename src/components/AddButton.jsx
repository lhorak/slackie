import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import FontAwesome from 'react-fontawesome';
import FullscreenModal from './FullscreenModal';

//styles
require('../styles/transitions/fadeIn.scss');


class AddButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false
        }
    };

    openModal = () => {
        this.props.onOpenModal && this.props.onOpenModal();
        this.setState({isModalOpened: true});
    };

    closeModal = () => {
        this.props.onCloseModal && this.props.onCloseModal();
        this.setState({isModalOpened: false});
    };

    render() {
        return (
            <button style={styles.base} onClick={this.openModal}>
                <FontAwesome name="plus"/>
                <ReactCSSTransitionGroup
                    transitionName="fadeIn"
                    transitionAppear={true}
                    transitionAppearTimeout={100}
                    transitionEnterTimeout={100}
                    transitionLeaveTimeout={100}
                >
                    {
                        this.state.isModalOpened &&
                        <FullscreenModal onClose={this.closeModal}>
                            {this.props.children}
                        </FullscreenModal>
                    }
                </ReactCSSTransitionGroup>
            </button>
        );
    };
}

AddButton.propTypes    = {
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func
};
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