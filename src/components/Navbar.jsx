import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav nav-pills justify-content-center shadow">
            <NavLink to="/" className="nav-link">Go Home</NavLink>
            <NavLink to="/films" className="nav-link">View Films</NavLink>
            <NavLink to="/people" className="nav-link">View People</NavLink>
        </nav>
    );
}

export default Navbar;