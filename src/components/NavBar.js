import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header id="layout-header">
            <Link to="/">
                <h1 className="titulo">Nak Mangas</h1>
            </Link>
            <NavLink to="/editorial/ivrea" className='nav__link'>Ivrea</NavLink>
            <NavLink to="/editorial/ovnipress" className='nav__link'>OvniPress</NavLink>
            <NavLink to="/editorial/paninimanga" className='nav__link'>Panini Manga</NavLink>
            <CartWidget/> 
        </header>
    );
}
export default NavBar;