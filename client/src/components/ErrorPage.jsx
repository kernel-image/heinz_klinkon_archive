import ImageContainer from './ImageContainer'
import { Link, useRouteError } from 'react-router-dom'  
import '../styles/App.css'

function ErrorPage() {
  const error = useRouteError();
  const message = error ? error.message : "unknown error";
  return (
    <>
        <ImageContainer id = "error"/>
        <h3>kaputt</h3>
        <div className="error message">
            {message}
        </div>
        <Link to = "/">Home</Link>
        </>
  )
}

export default ErrorPage