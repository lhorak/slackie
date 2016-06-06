import React from 'react'
import { connect } from 'react-redux'
import SlackieApp from '../components/App'

const mapStateToProps = (store) => {
    return {
        channels: store.channels
    };
};

const AppContainer = connect(mapStateToProps)(SlackieApp);

export default AppContainer