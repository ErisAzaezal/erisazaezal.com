import './layout.less';

import Header from "../header/header"
import Footer from "../footer/footer"
import { NavLink, Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <div className="layout">
                <div className="header">
                    <Header />
                </div>
                <div className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/writing">Writing</NavLink>
                    <NavLink to="/worldbuilding">World Building</NavLink>
                    <NavLink to="/audios">Audios</NavLink>
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}
