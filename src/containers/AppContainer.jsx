import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (store) => {
    return {
        channels: store.get('channels')
    };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer