import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import ChannelsList from './ChannelsList'
import CreateNewChannel from './CreateNewChannel'

class ChannelsContainer extends Component {
    render() {
        return (
            <div style={styles.base}>
                <div style={styles.title}>
                    CHANNELS {this.props.channels.count() > 0 && <span>({this.props.channels.count()})</span>}
                    <CreateNewChannel />
                </div>
                <ChannelsList channels={this.props.channels} activeChannel={this.props.openedChat}/>
            </div>
        );
    }
}

ChannelsContainer.propTypes    = {};
ChannelsContainer.defaultProps = {};


const styles = {
    base : {
        padding: '10px 0'
    },
    title: {
        padding: '0 10px'
    }
};

const mapStateToProps = store => {
    return {
        channels  : store.channels,
        openedChat: store.openedChat
    }
};


export default withRouter(connect(mapStateToProps)(Radium(ChannelsContainer)));
