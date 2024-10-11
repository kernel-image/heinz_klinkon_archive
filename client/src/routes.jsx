import { Link, Navigate, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx'
import SearchSidebar from './components/SearchSidebar.jsx';
import Content from './components/Content.jsx';
import NavButton from './components/NavButton.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

const routes = [
    {
      path: "/",
      element: (
            <>
            <Link to = "/" tabIndex="0">
              <Header />
            </Link>
            <div className = "main">
              <div className="content">
                <Outlet />
                <div className = "footer">
                  <NavButton type = "previous"/>
                  <NavButton type = "next"/>
                </div>
              </div>
              <SearchSidebar />
            </div>
            </>
          ),
          children: [
            {
              path: "/",
              element: <Home />,
              index: true,
              exact: true
            },
            {
              path: "id/:id",
              element: <Content />,
            },
            {
              path: "id",
              element: <Navigate to = "/" />,
            }
          ],
      errorElement: <ErrorPage />,
    }
  ];
  
  export default routes;