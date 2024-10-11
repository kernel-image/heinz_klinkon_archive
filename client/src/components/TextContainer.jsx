import '../styles/TextContainer.css'
import { AppContext } from '../utils/AppContext'
import { useContext } from 'react'
import PropTypes from 'prop-types'

function TextContainer({id}) {

    const {results} = useContext(AppContext);
    const result = results.filter(result => result.id.toLowerCase() === id)[0];

    return (
        <div className="text-container" data-testid="text-container">
            {result ? (
                <>
                <h3>{`${result.title} (${result.year})`}</h3>
                <p>{result.notes}</p>
                </>
            ) : null}
        </div>
    )
}

TextContainer.propTypes = {
    id: PropTypes.string
}

export default TextContainer