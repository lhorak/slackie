import React from 'react'
import Radium from 'radium'

const TopBar = props => {
    'use strict';
    return (
        <div style={styles}>
            TopBar
        </div>
    );
};

const styles = {
    position       : 'absolute',
    top            : 0,
    right          : 0,
    left           : 0,
    height         : '60px',
    borderBottom   : '1px solid #E4E4E4',
    marginLeft     : '220px',
    backgroundColor: '#fff',
    padding        : '10px 20px'
}

export default Radium(TopBar);