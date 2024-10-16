import SearchResult from './SearchResult'
import { AppContext } from '../utils/AppContext'
import { useContext } from 'react';
import PropTypes from 'prop-types';

function SearchResults({navigate}) {
    const {results} = useContext(AppContext);
    const headerElement = {title: 'Title', year: 'Year', medium: 'Medium', id: 'ID'};

    if (results.length === 0) {
        return null
    }
    return (
        <>
        <SearchResult result = {headerElement} />
        <div className = "search-results">
            {results.map((element) => <SearchResult key = {element.id} result = {element} navigate = {navigate}/>)}
        </div>
        </>
    )
}

SearchResults.propTypes = {
    navigate: PropTypes.func
}

export default SearchResults