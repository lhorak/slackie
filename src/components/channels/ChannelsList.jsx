import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'

import ChannelListItem from './ChannelListItem'


const ChannelsList = (props) => {
    return (
        <ul style={styles.base}>
            {map(sortBy(props.channels.toJS(), 'name'), (channel, i) => {
                return <ChannelListItem key={i} name={channel.name}/>
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

export default Radium(ChannelsList);
