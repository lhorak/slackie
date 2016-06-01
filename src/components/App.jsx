import React, {
    Component,
    PropTypes,
} from 'react';

import { connect } from 'react-redux'


import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import ChannelsList from './ChannelsList'

class App extends Component {
    render() {
        console.log(this.props.channels);

        return (
            <div className="container">
                <Sidebar>
                    <ChannelsList channels={this.props.channels}/>
                </Sidebar>
                <TopBar />
            </div>
        );
    }
}

App.propTypes    = {};
App.defaultProps = {};

export default App;
