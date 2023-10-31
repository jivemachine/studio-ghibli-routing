import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        // <nav className="nav nav-pills justify-content-left p-2 shadow">
        <nav className="nav shadow text-muted">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1920px-Studio_Ghibli_logo.svg.png" style={{height: '7rem', width: 'auto'}} alt="" />
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive && 'active'} nav-link ms-auto`}>Go Home</NavLink>
            <NavLink to="/films" className="nav-link">View Films</NavLink>
            <NavLink to="/people" className="nav-link">View People</NavLink>
        </nav>
    );
}

export default Navbar;