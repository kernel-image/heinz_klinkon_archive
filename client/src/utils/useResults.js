import { useState, useEffect } from 'react'

const getURLforSearch = (search, port=5173) => {
    //todo:get correct url for api
    const baseURL = `http://localhost:${port}/`;
    return baseURL + "?search=" + encodeURIComponent(search);
}

export function useResults (search) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [searching, setSearching] = useState(false);

    //const {search} = useContext(AppContext);
    const url = getURLforSearch(search, 3000);

    useEffect(() => { async function getSearchResults() {
                if (search === "") {
                    //setError("search is empty");
                    console.log("search is empty");
                    //do not clear results
                    return;
                }
                setSearching(true);
                console.log("getting search results for " + search + " from " + url);
                await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    
                    if (response.status >= 400) {
                        setError("server error");
                        setResults([]);
                        return;
                        //throw new Error("server error");
                    }
                    const data = response.json();
                    return data;
                })
                .then((data) => {
                    
                    setResults(data.results);
                    setError(null);
                })
                .catch(error => setError(error))
                .finally(() => setSearching(false));
            }
            getSearchResults();
        },
        [url, search]
      );
    return {results, error, searching};
};