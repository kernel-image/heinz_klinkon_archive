import PropTypes from 'prop-types'

function SearchInput({inputValue, setInputValue, placeholder = "Search here"}) {
  
    return (
      <>
      <label htmlFor = "search-input" className = "search-label">Search</label>
      <input
        type="text"
        id="search-input"
        name="search"
        value={inputValue}
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
      />
      
      </>
    );
}

SearchInput.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default SearchInput