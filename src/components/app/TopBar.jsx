import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'

import OpenedUserInfo from '../users/OpenedUserInfo'
import OpenedChannelInfo from '../channels/OpenedChannelInfo'

import SearchContainer from '../search/SearchContainer'


const TopBar = props => {
    'use strict';
    return (
        <div style={styles.base}>
            <div style={styles.leftContent}>
                {props.openedChannel && <OpenedChannelInfo name={props.openedChannel.get('name')}
                                                           purpose={props.openedChannel.get('purpose')}/>}

                {props.openedUser && <OpenedUserInfo username={props.openedUser.get('username')}
                                                     fullname={props.openedUser.get('fullname')}
                                                     status={props.openedUser.get('status')}/>}
            </div>
            <div style={styles.rightContent}>
                <SearchContainer />
            </div>
        </div>
    );
};

const styles = {
    base        : {
        position       : 'absolute',
        top            : 0,
        right          : 0,
        left           : 0,
        height         : '60px',
        borderBottom   : '1px solid #E4E4E4',
        marginLeft     : '220px',
        backgroundColor: '#fff',
        padding        : '10px 20px'
    },
    leftContent : {
        float: 'left'
    },
    rightContent: {
        float: 'right'
    }
};

const mapStateToProps = state => {
    return {
        openedChat   : state.openedChat || undefined,
        openedChannel: state.openedChat ? state.openedChat.chatType === 'channel' && state.channels.get(state.openedChat.id) : undefined,
        openedUser   : state.openedChat ? state.openedChat.chatType === 'directMessage' && state.users.get(state.openedChat.id) : undefined
    }
}

export default connect(mapStateToProps)(Radium(TopBar));