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

  useEffect(() => {
    console.log(window.location.pathname);
  }, [selectedResult]);

  return (
    <>
      <AppContext.Provider value = {{results, error, searching, selectedResult, setSelectedResult, setSearch, search}}>
        <RouterProvider router = {router} onNavigate = {() => {console.log(window.location.pathname)}}>
          <Outlet />
        </RouterProvider>
      </AppContext.Provider>
    </>
  )
}

export default App