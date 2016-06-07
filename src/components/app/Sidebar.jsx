import React, { PropTypes } from 'react';
import Radium from 'radium'

import ChannelsContainer from '../../containers/ChannelsContainer'
import UsersContainer from '../../containers/UsersContainer'
import PrivateMessagesContainer from '../../containers/PrivateMessagesContainer'

import createChannel from '../../actions/createChannel'

const Sidebar = (props, {store}) => {

    const addNewChannel = (event) => {
        event.preventDefault();
        console.log('store in new channel', store);
        const newState = store.dispatch(createChannel('hello_world'));
        console.log(newState);
    }
    
    return (
        <div style={styles}>
            <ChannelsContainer />
            <PrivateMessagesContainer />
            <UsersContainer />
        </div>
    );
};

Sidebar.contextTypes = {
    store: PropTypes.object
};

const styles = {
    width          : '220px',
    height         : '100%',
    backgroundColor: '#0E4250',
    color          : '#fff'
}

export default Radium(Sidebar);