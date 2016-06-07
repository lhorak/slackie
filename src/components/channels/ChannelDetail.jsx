import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium';
import MessageComposer from '../MessageComposer';

class ChannelDetail extends Component {
    render() {
        return (
            <div style={styles.base}>
                <MessageComposer onSend={()=>{}} />
            </div>
        );
    }
}

ChannelDetail.propTypes    = {};
ChannelDetail.defaultProps = {};

const styles = {
    base: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        background: '#fff',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    }
}

export default Radium(ChannelDetail);
