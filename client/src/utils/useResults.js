import { useState, useEffect } from 'react'

const getURLforSearch = (search) => {
    const baseURL = 'https://heinzserver.vercel.app/';
    return baseURL + "?search=" + encodeURIComponent(search);
}

const readStream = async (stream) => {
    const reader = stream.getReader()
    const decoder = new TextDecoder();
    let done = false;
    let result = "";
    while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        result += chunkValue;
    }
    return result;
}

export function useResults (search) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [searching, setSearching] = useState(false);

    //const {search} = useContext(AppContext);
    const url = getURLforSearch(search);

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
                    if (response.status === 200 && response.body instanceof ReadableStream) {
                        //console.log("response is stream");
                        return readStream(response.body);
                    }
                    const data = response.json();
                    return data;
                })
                .then((data) => {
                    if (typeof data === "string") {
                        setResults(JSON.parse(data));
                    }else{
                        setResults(data.results);
                    }
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