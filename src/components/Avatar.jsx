import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'

const Avatar = ({username, link}) => {
    const firstLetter = username[0].toUpperCase();

    return (
        <div style={styles.base}>
            {link ? <img src={link} alt={username} width="40" height="40"/> : firstLetter}
        </div>
    );
}

Avatar.propTypes    = {
    username: PropTypes.string.isRequired,
    link    : PropTypes.string
};
Avatar.defaultProps = {};


const styles = {
    base: {
        width       : '40px',
        height      : '40px',
        lineHeight  : '40px',
        fontSize    : '1.5rem',
        background  : 'rgb(14, 66, 80)',
        color       : 'white',
        textAlign   : 'center',
        fontWeight  : 'bold',
        borderRadius: '.3rem',
        overflow    : 'hidden'
    }

}

export default Radium(Avatar);