import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium'
import { Link } from 'react-router'

require('../styles/sidebarLink.scss');


const ChannelListItem = props => (
    <li className="sidebarLink channel" key={props.name}>
        <Link to={`/channel/${props.name}`}>{props.name}</Link>
    </li>
);

export default ChannelListItem;
