import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'

import ChannelListItem from './ChannelListItem'
import { withRouter } from 'react-router'


const ChannelsList = (props, context) => {
    console.log(props.channels.toJS());
    
    return (
        <ul style={styles.base}>
            {map(sortBy(props.channels.toJS(), 'name'), (channel) => {
                return <ChannelListItem active={channel && (channel.id === props.activeChannel)} key={channel.id}
                                        name={channel.name}/>
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

export default withRouter(Radium(ChannelsList));
