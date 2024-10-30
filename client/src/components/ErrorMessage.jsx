import PropTypes from 'prop-types'
import ImageContainer from './ImageContainer'
import '../styles/ErrorMessage.css'

function ErrorMessage({message}) {
    return (
        <>
        <ImageContainer image = "../assets/icons/ERROR.svg"/>
        <div className="error message">
            {message}
        </div>
        </>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorMessage