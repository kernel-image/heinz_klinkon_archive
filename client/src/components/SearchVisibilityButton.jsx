import '../styles/SearchVisibilityButton.css'
import PropTypes from 'prop-types';


function SearchVisibilityButton({callback}) {
    
    return <button type="" className = "search-visibility-button" data-testid="search-visibility-button" name = "search-visibility-button" aria-label = "search visibility button" tabIndex="0" onClick={() => callback()}></button>
}

SearchVisibilityButton.propTypes = {
    callback: PropTypes.func
}

export default SearchVisibilityButton