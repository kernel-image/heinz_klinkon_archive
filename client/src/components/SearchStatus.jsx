import { AppContext } from '../utils/AppContext'
import { useContext } from 'react';

function SearchStatus() {
    const {results, searching, error, search} = useContext(AppContext);

    if (error) {
        console.log(error);
        return (
            <div className="search-status" data-testid="search-status">
                {`Cannot find ${search}`}
            </div>
        )
    }

    else if (searching) {
        return (
            <div className="search-status" data-testid="search-status">
                {`Searching for ${search}...`}
            </div>
        )
    }
    else {
        return (
            <div className="search-status" data-testid="search-status">
                {`Showing ${results.length} ${search} piece${results.length === 1 ? "" : "s"}`}
            </div>
        )
    }
    
}

export default SearchStatus