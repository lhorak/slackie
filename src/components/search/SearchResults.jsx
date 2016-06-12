import React, {
    Component,
    PropTypes,
} from 'react';

import MaterialIcon from '../MaterialIcon'
import SearchResult from './SearchResult'
import Scrollbars from 'react-custom-scrollbars'

require('../../styles/searchResults.scss');

const SearchResults = props => {
    return (
        <div className={`searchResults ${props.opened ? 'active' : ''}`}>
            <div className="searchResults__header">
                <h1>Search results</h1>
            </div>
            <Scrollbars>
            <div className="searchResults__results">
                {props.searchResults && props.searchResults.map((result, key) => {
                    return <SearchResult key={key}
                                         message={result.message.message}
                                         user={result.message.userId}
                                         timestamp={result.message.timestamp}
                                         targetType={result.targetType}
                                         targetName={result.targetName}/>
                })}
            </div>
            </Scrollbars>
        </div>
    );
}

SearchResults.propTypes    = {};
SearchResults.defaultProps = {};

const styles = {}

export default SearchResults;