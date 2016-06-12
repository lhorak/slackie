import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import FontAwesome from 'react-fontawesome';
import MaterialIcon from './MaterialIcon';
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
            <div style={styles.base}>
                <MaterialIcon
                    style={{cursor: 'pointer'}}
                    name="add_circle_outline"
                    size="1.2rem"
                    onClick={this.props.onClick}/>

                <ReactCSSTransitionGroup
                    transitionName="fadeIn"
                    transitionAppear={true}
                    transitionAppearTimeout={100}
                    transitionEnterTimeout={100}
                    transitionLeaveTimeout={100}
                >
                    {
                        this.props.isModalOpened &&
                        <FullscreenModal onClose={this.props.onCloseModal}>
                            {this.props.children}
                        </FullscreenModal>
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    };
}

AddButton.propTypes    = {
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    onClick: PropTypes.func,
    isModalOpened: PropTypes.bool.isRequired
};
AddButton.defaultProps = {
    isModalOpened: false
};


const iconSize = .6;
const size     = iconSize * 1.8;

const styles = {
    base: {
        display   : 'inline-block',
        background: 'transparent',
        outline   : 'none',
        border    : 'none',
        float     : 'right',
        lineHeight: '1rem',
        color     : 'rgba(255,255,255,.7)',
        padding   : 0,

        ':hover': {
            color : 'rgba(255,255,255,1)'
        }
    }
}

export default Radium(AddButton)