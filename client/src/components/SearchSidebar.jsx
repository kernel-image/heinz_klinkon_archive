import '../styles/SearchSidebar.css'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import SearchStatus from './SearchStatus'
import SearchResults from './SearchResults'
import { useState, useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import PropTypes from 'prop-types'

function SearchSidebar({navigate}) {
    const [inputValue, setInputValue] = useState("");
    const {setSearch} = useContext(AppContext);

    const handleSearch = (event) => {
        console.log("handle search called for " + inputValue);
        event.preventDefault();
        setSearch(inputValue);
    }

    return (
        <div className = "search-sidebar">
            <div className = "search-sidebar-header">
                <form className = "search-form" onSubmit={handleSearch}>
                    <SearchInput  inputValue = {inputValue} setInputValue = {setInputValue} placeholder = "What are those down there?" />
                    <SearchButton />
                </form>
                <SearchStatus />
            </div>
            <SearchResults navigate = {navigate} />
        </div>
    )
}

SearchSidebar.propTypes = {
    navigate: PropTypes.func,
}

export default SearchSidebar