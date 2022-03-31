import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>All Market</h1>
            </Link>
            <NavLink to="/categoria/electronica" className='nav__link'>Electronica</NavLink>
            <NavLink to="/categoria/joyeria" className='nav__link'>Joyeria</NavLink>
            <NavLink to="/categoria/ropamujer" className='nav__link'>Ropa Mujer</NavLink>
            <NavLink to="/categoria/ropahombre" className='nav__link'>Ropa Hombre</NavLink>
            <CartWidget/> 
        </header>
    );
}

export default NavBar;