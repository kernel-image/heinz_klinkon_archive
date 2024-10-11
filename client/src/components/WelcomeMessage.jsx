import PropTypes from 'prop-types'
import '../styles/WelcomeMessage.css'


function WelcomeMessage({message}) {
    return (
        <>
        <p className="welcome message">
            {message}
        </p>
        </>
    )
}

WelcomeMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default WelcomeMessage