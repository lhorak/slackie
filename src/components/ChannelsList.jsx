import React, {
    Component,
    PropTypes,
} from 'react';

import ChannelListItem from './ChannelListItem'


const ChannelsList = (props) => {
    const channels = props.channels.map((channel) => {
        return <ChannelListItem name={channel.get('name')}/>
    });


    return (
        <ul className="channelsList">
            {channels}
        </ul>
    );
}

export default ChannelsList;
