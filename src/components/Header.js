import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "../context/CartContext"
import NavBar from './NavBar'
const Header = () => {

    const {calcCantidad} = useContext(contexto)

    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>All Market</h1>
            </Link>
            <NavBar/>
            <Link to="/carrito">
                <span className="material-icons">
                    shopping_cart
                </span>
                {calcCantidad()}
            </Link>
        </header>
    )
}
export default Header