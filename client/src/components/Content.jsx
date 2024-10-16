import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Content() {

    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (id) {
          setLoaded(true);
        }
      }, [id]);
    
      if (!loaded) return null;
    //console.log("rendering content for id: " + id);
    return (
        <>        
            <ImageContainer id = {id}/>
            <TextContainer id = {id}/>
        </>
    )
}

export default Content