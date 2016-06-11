import React, {
    Component,
    PropTypes,
} from 'react';

import { connect } from 'react-redux'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

import searchTerm from '../../actions/searchTerm'
import clearSearchResults from '../../actions/clearSearchResults'


class SearchContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            searchTerm: '',
            isFocused : false
        }
    }

    changeSearchTerm = (ev) => {
        this.setState({searchTerm: ev.target.value});
        if (ev.target.value.length === 0) {
            this.props.clearSearchResults();
        }
        else {
            this.props.searchTerm(ev.target.value);
        }
    };

    clearSerachTerm = () => {
        this.setState({searchTerm: ''});
        this.props.clearSearchResults();
    }

    toggleFocused = () => {
        return this.setState({isFocused: !this.state.isFocused});
    }

    render() {
        return (
            <div>
                <SearchInput value={this.state.searchTerm}
                             onChange={this.changeSearchTerm}
                             onClear={this.clearSerachTerm}
                             onFocus={this.toggleFocused}
                             onBlur={this.toggleFocused}/>
                <SearchResults opened={this.state.isFocused} searchResults={this.props.searchResults}
                               users={this.props.users}/>
            </div>
        );
    }
}

SearchContainer.propTypes    = {};
SearchContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        users        : state.users
    }
};


export default connect(mapStateToProps, {searchTerm, clearSearchResults})(SearchContainer);
