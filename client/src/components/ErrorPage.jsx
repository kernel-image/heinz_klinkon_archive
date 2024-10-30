import ImageContainer from './ImageContainer'
import { Link, useRouteError } from 'react-router-dom'  
import '../styles/App.css'

function ErrorPage() {
  const error = useRouteError();
  const message = error ? error.message : "unknown error";
  return (
    <>
        <ImageContainer id = "hk0136"/>
        <h3>es ist kaput :(</h3>
        <div className="error message">
            {message}
        </div>
        <Link to = "/">Go Back Home</Link>
        </>
  )
}

export default ErrorPage