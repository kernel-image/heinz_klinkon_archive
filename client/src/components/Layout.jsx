import NavButton from './NavButton.jsx';
import Header from './Header.jsx';
import SearchSidebar from './SearchSidebar.jsx';
import SearchVisibilityButton from './SearchVisibilityButton.jsx';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '../utils/useMediaQuery'
import { useContext } from 'react';
import { AppContext } from '../utils/AppContext.js';


function Layout() {
    const {contentVisible, setContentVisible} = useContext(AppContext);
    const navigate = useNavigate();
    const shouldToggleSearch = useMediaQuery('(max-width: 1440px)');

    const handleToggleSearch = () => {
        console.log("handle toggle search called");
        if (shouldToggleSearch) {
            setContentVisible(!contentVisible);
        }
    }

    const getContentWrapperClass = () => {
        return "content-wrapper" + (contentVisible ? "" : " hidden");
    }

    const getSidebarVisibility = () => {
        return (!shouldToggleSearch || (shouldToggleSearch && !contentVisible));
    }

    return(
        <>
            <Link to = "/" tabIndex="0">
              <Header />
            </Link>
            <div className = "main">
              <div className="content">
                  <div className = {getContentWrapperClass()}>
                    <Outlet />
                  </div>
                <div className = "footer">
                  <NavButton type = "previous" navigate = {navigate} />
                  {shouldToggleSearch && <SearchVisibilityButton callback={handleToggleSearch}/>}
                  <NavButton type = "next" navigate = {navigate} />
                </div>
              </div>
              { getSidebarVisibility() && <SearchSidebar navigate = {navigate}/> }
            </div>
        </>
    )
}

export default Layout
