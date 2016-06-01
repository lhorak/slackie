import React, {
    Component,
    PropTypes,
} from 'react';

class ChannelListItem extends Component {
    render() {
        return (
            <li className="channelListItem" key={this.props.name}>
                {this.props.name}
            </li>
        );
    }
}

ChannelListItem.propTypes    = {};
ChannelListItem.defaultProps = {};

export default ChannelListItem;
