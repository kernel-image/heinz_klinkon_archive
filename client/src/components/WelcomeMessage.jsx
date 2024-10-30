import PropTypes from 'prop-types'
import '../styles/WelcomeMessage.css'


function WelcomeMessage({message}) {
    return (
        <>
        <p className="welcome message">
            {message}
            <br/>
            <div className="contact">
            <a href="mailto:info@kernel-image.net">Email</a> with inquiries.
        </div>
        </p>
        </>
    )
}

WelcomeMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default WelcomeMessage