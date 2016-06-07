import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium'

import Sidebar from './Sidebar'
import Content from '../Content'
import TopBar from './TopBar'

require('../../styles/main.scss');

class SlackieApp extends Component {
    render() {
        return (
            <div style={styles.base}>
                <Sidebar channels={this.props.channels} users={this.props.users}/>
                <TopBar />
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}


SlackieApp.propTypes    = {};
SlackieApp.defaultProps = {};

const styles = {
    base: {
        backgroundColor: '#F0FCFF',
        position       : 'absolute',
        top            : 0,
        right          : 0,
        bottom         : 0,
        left           : 0
    }
};

export default Radium(SlackieApp);
