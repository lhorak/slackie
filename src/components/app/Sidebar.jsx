import React, { PropTypes } from 'react';
import Radium from 'radium'

import ChannelsContainer from '../../containers/ChannelsContainer'
import PrivateMessagesContainer from '../../containers/PrivateMessagesContainer'

const Sidebar = (props) => {
    return (
        <div style={styles}>
            <ChannelsContainer />
            <PrivateMessagesContainer />
        </div>
    );
};

const styles = {
    width          : '220px',
    height         : '100%',
    backgroundColor: '#0E4250',
    color          : '#fff'
}

export default Radium(Sidebar);