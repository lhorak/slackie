import React, { PropTypes } from 'react';
import Radium from 'radium'
import Scrollbars from 'react-custom-scrollbars'

import ChannelsContainer from '../channels/ChannelsContainer'
import DirectMessagesContainer from '../direct-messages/DirectMessagesContainer'

const Sidebar = (props) => {
    return (
        <div style={styles}>
            <Scrollbars>
                <ChannelsContainer />
                <DirectMessagesContainer />
            </Scrollbars>
        </div>
    );
};

const styles = {
    position       : 'absolute',
    width          : '220px',
    height         : '100%',
    backgroundColor: '#0E4250',
    color          : '#fff'
}

export default Radium(Sidebar);