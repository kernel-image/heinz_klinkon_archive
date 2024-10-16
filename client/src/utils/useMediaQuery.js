import { useEffect, useMemo, useState } from 'react'

//https://blog.tomaszgil.me/how-to-use-css-media-queries-in-react-components
function useMediaQuery(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
}


export default useMediaQuery
  
