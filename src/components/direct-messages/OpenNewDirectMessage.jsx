import React, {
    Component,
    PropTypes,
} from 'react';
import { withRouter } from "react-router";
import Radium from "radium";
import AddButton from "../AddButton";
import UsersList from "../users/UsersList";
import { connect } from "react-redux";

import openDirectMessage from '../../actions/openDirectMessage';

class OpenNewDirectMessage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            channelName   : '',
            channelPurpose: ''
        }
    };

    toggleModal = () => {
        this.setState({openModal: !this.state.openModal});
    };

    render() {
        return (
            <AddButton
                isModalOpened={this.state.openModal}
                onClick={this.toggleModal}
                onCloseModal={this.toggleModal}>

                <UsersList users={this.props.users} onUserClick={this.toggleModal}/>
            </AddButton>
        );
    }
}

OpenNewDirectMessage.propTypes    = {};
OpenNewDirectMessage.defaultProps = {};

const styles = {
    base       : {
        textAlign: 'left'
    },
    header     : {
        fontSize : '2.5rem',
        textAlign: 'left',
        color    : '#2c2d30'
    },
    description: {
        fontSize  : '.9rem',
        lineHeight: '1.2',
        textAlign : 'left',
        color     : '#9e9ea6'
    }
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDirectMessage: openDirectMessage
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(OpenNewDirectMessage)));
