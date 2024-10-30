import { Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ErrorPage from './components/ErrorPage.jsx'
import Content from './components/Content.jsx';
import Home from './components/Home.jsx';

const routes = [
    {
      path: "/",
      element: (
            <Layout />
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