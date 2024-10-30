import PropTypes from 'prop-types';

function SearchResultInfo({result}) {
    return (
        <>
            <div className = "result title">{result.title}</div>
            <div className = "result year">{result.year}</div>
            <div className = "result medium">{result.medium}</div>
            <div className = "result id">{result.id}</div>
        </>
    )
}


SearchResultInfo.propTypes = {
    result: PropTypes.object
}

export default SearchResultInfo