import { useState, useEffect } from "react"
import { useResults } from "./utils/useResults.js"
import { AppContext } from "./utils/AppContext.js"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import './styles/App.css'

function App() {
  const router = createBrowserRouter(routes);
  const [search, setSearch] = useState('default');
  const {results, error, searching} = useResults(search);
  const [selectedResult, setSelectedResult] = useState(null);
  const [contentVisible, setContentVisible] = useState(true);
  
  useEffect(() => {
    console.log(window.location.pathname);
  }, [selectedResult]);

  return (
    <>
      <AppContext.Provider value = {{results, error, searching, selectedResult, setSelectedResult, setSearch, search, contentVisible, setContentVisible}}>
        <RouterProvider router = {router}>
          <Outlet />
        </RouterProvider>
      </AppContext.Provider>
    </>
  )
}

export default App