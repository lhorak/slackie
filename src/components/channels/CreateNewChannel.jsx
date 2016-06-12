/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {Component, PropTypes} from "react";
import {withRouter} from "react-router";
import Radium from "radium";
import AddButton from "../AddButton";
import NewChannelForm from "./NewChannelForm";
import {connect} from "react-redux";
import createChannel from "../../actions/createChannel";
// import ChannelNameInput from './ChannelNameInput'


class CreateNewChannel extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            channelName: '',
            channelPurpose: ''
        }
    };

    toggleModal = () => {
        this.setState({openModal: !this.state.openModal});
    };

    createNewChannel = (name, purpose) => {
        this.props.createChannel(name, purpose);
        this.toggleModal();
        this.props.router.push(`/channel/${name}`);
    };


    render() {
        return (
            <AddButton
                isModalOpened={this.state.openModal}
                onClick={this.toggleModal}
                onCloseModal={this.toggleModal}>

                <NewChannelForm onSubmit={this.createNewChannel} />
            </AddButton>
        );
    }

}

const styles = {
    base: {
        textAlign: 'left'
    },
    header: {
        fontSize: '2.5rem',
        textAlign: 'left',
        color: '#2c2d30'
    },
    description: {
        fontSize: '.9rem',
        lineHeight: '1.2',
        textAlign: 'left',
        color: '#9e9ea6'
    }
};

const mapStateToProps = state => {
    return {
        channels: state.channels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (name, purpose) => {
            dispatch(createChannel(name,purpose))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(CreateNewChannel)));