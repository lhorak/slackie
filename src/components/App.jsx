import React, {
    Component,
    PropTypes,
} from 'react';


import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import ChannelsList from './ChannelsList'
import UsersList from './UsersList'

class App extends Component {
    render() {
        console.log(this.props.channels);

        const users = [{nick: 'bobby'}, {nick: 'sally'}];

        return (
            <div className="container">
                <Sidebar>
                    <ChannelsList channels={this.props.channels}/>
                    <UsersList users={users}/>
                </Sidebar>
                <TopBar />
            </div>
        );
    }
}

App.propTypes    = {};
App.defaultProps = {};

export default App;
