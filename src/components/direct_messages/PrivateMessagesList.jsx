import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'

import ChannelListItem from '../channels/ChannelListItem'


const PrivateMessagesList = props => {
    return (
        <ul style={styles.base}>
            {props.privateMessages.map((channel, i) => {
                return <ChannelListItem key={i} name={channel.get('name')}/>
            })}
        </ul>
    );
};

const styles = {
    base: {
        listStyle: 'none',
        padding  : 0
    }
}

export default Radium(PrivateMessagesList);