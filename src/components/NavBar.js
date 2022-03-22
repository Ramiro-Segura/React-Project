import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav'>
            <NavLink to="/categoria/1" className='nav__link'>Electronica</NavLink>
            <NavLink to="/categoria/2" className='nav__link'>Joyeria</NavLink>
            <NavLink to="/categoria/3" className='nav__link'>Ropa Mujer</NavLink>
            <NavLink to="/categoria/4" className='nav__link'>Ropa Hombre</NavLink>
        </nav>
    );
}

export default NavBar;