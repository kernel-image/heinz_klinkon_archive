import PropTypes from 'prop-types'
import '../styles/ImageContainer.css'
import { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

function ImageContainer({ id }) {
    const baseURL = 'https://kernel-image.net/heinz';
    const image = `${baseURL}/img/${id}.png`
    const result = useContext(AppContext).results.filter(result => result.id.toLowerCase() === id)[0];
    const alt = result ? `image of ${result.title} (${result.year}) by heinz klinkon` : `image of artwork by heinz klinkon`;

    return (
        <div className = "image-container">
            <img src = {image} alt = {alt}/>
        </div>
    )
}

ImageContainer.propTypes = {
    id: PropTypes.string.isRequired
}

export default ImageContainer