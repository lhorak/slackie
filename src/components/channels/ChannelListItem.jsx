import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium'
import { Link } from 'react-router'

require('../../styles/sidebarLink.scss');


class ChannelListItem extends Component {


    render() {
        return (
            <li className={this.props.active ? 'sidebarLink channel active' : 'sidebarLink channel'}
                key={this.props.id}>
                <Link to={`/channel/${this.props.name}`}>{this.props.name}</Link>
            </li>
        );
    }

}
;

export default ChannelListItem;
