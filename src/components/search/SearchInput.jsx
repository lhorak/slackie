import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium';
import MaterialIcon from '../MaterialIcon';

const SearchInput = props => {

    const onFocus = () => {
        props.onFocus && props.onFocus();
    };

    const onBlur = () => {
        props.onBlur && props.onBlur();
    };

    return (
        <div style={styles.base}>
          <span style={styles.searchIcon}>
              <MaterialIcon name="search"
                            size="1.5rem"/>
          </span>
            <input style={styles.input}
                   type="text"
                   onFocus={onFocus}
                   onBlur={onBlur}
                   onChange={props.onChange}
                   value={props.value}
                   placeholder="Search"/>
            {props.value.length > 0 ? <span style={styles.cancelIcon} onClick={props.onClear}><MaterialIcon name="clear"
                                                                                                            size="1rem"/></span> : null }
        </div>
    );
}

SearchInput.propTypes    = {};
SearchInput.defaultProps = {};

const styles = {
    base      : {
        position: 'relative'
    },
    input     : {
        lineHeight  : '1.2rem',
        padding     : '7px 30px',
        borderRadius: '.3rem',
        border      : '1px solid rgb(111, 111, 111)',
        width       : '350px',
        maxWidth    : '600px',
        fontSize    : '.9rem',
        fontWeight  : '200',
        marginTop   : '2px',


        ':focus': {
            border   : '1px solid #EE8123',
            boxShadow: 'none',
            outline  : 'none'
        }
    },
    searchIcon: {
        position: 'absolute',
        left    : '4px',
        top     : '7px'
    },
    cancelIcon: {
        position    : 'absolute',
        right       : '4px',
        top         : '10px',
        width       : '1.2rem',
        height      : '1.2rem',
        textAlign   : 'center',
        display     : 'block',
        borderRadius: '50%',
        color       : 'rgb(111, 111, 111)',
        border      : '2px solid rgb(111, 111, 111)'
    }
}

export default Radium(SearchInput);