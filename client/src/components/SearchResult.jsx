import '../styles/SearchResult.css'
import {PropTypes} from 'prop-types'
import SearchResultInfo from './SearchResultInfo'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../utils/AppContext'

function SearchResult({result, navigate}) {
    const {selectedResult, setSelectedResult} = useContext(AppContext);
    const [selectedClass, setSelectedClass] = useState(false);

    useEffect(() => {
        if (result.id === 'ID')
            return;
        if (!selectedResult) {
            setSelectedClass(false);
        }
        else if (selectedResult.id === result.id){
            console.log(result.id + " is selected");
            setSelectedClass(true);
        }else
            setSelectedClass(false);
    }, [selectedResult, result]);

    

    const handleClick = (result) => {
        console.log("clicked result: " + result.id);
        setSelectedResult(result);
        navigate(`/id/${result.id}`.toLowerCase());
    }


    if (result.id === 'ID'){
        return (
            <div className = "search-result heading" data-testid="search-result-heading">
                <SearchResultInfo result = {result} />
            </div>
        )
    }

    return (
        <button type = "button" className = {'search-result' + (selectedClass ? ' selected' : ' default')} onClick = {function() {handleClick(result)}} onKeyDown={function(event) {if (event.key === 'Enter') {handleClick(result)}}} tabIndex="0" data-testid="search-result">
            <SearchResultInfo result = {result} />
        </button>
    )
}


SearchResult.propTypes = {
    result: PropTypes.object.isRequired,
    navigate: PropTypes.func
}

export default SearchResult