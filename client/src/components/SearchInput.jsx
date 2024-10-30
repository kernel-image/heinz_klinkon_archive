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
        onChange={(event) => {
          const negativeRegex = /[^[\w\s,.?!-']]/;
          if (negativeRegex.test(event.target.value)) {
            const filteredValue = event.target.value.replace(negativeRegex, '');
            setInputValue(filteredValue);
            return;
          }
          setInputValue(event.target.value)
          }
        }
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