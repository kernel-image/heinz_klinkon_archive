import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '../utils/AppContext'
import '../styles/NavButton.css'
import { useNavigate } from 'react-router-dom';
import { getIndex } from '../utils/navIndexMan';

function NavButton({type}) {
    const navigate = useNavigate();
    const {results, selectedResult, setSelectedResult} = useContext(AppContext);
    const handleNavClick = (type) => {
        console.log(`clicked ${type} button`);

        if (!results || results.length < 1) {
            console.log("no results to navigate to");
        }
        else if (!selectedResult) {
            setSelectedResult(results[0]);
            navigate(`/id/${results[0].id}`.toLowerCase());
        }
        else {
            const currentIndex = results.map(result => result.id).indexOf(selectedResult.id);
            const futureIndex = getIndex(currentIndex, results.length, type);
            if (!results){
                console.log("no results");
                return;
            }
            if (!results[futureIndex]){
                console.log("no selected result");
                return;
            }
            setSelectedResult(results[futureIndex]);
            navigate(`/id/${results[futureIndex].id}`.toLowerCase());
        }
    }
    return (
        <button type = "button" className = {`btn-nav ${type}`} onClick = {function() {handleNavClick(type)}} aria-label={`${type} content`} data-testid={`${type}-button`} tabIndex="0" onKeyDown={function(event) {if (event.key === 'Enter') {handleNavClick(type)}}}>
        </button>
    )
}

NavButton.propTypes = {
    type: PropTypes.string.isRequired
}

export default NavButton