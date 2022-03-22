import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>All Market</h1>
            </Link>
            <Link to="/carrito">
                <span className="material-icons">
                    shopping_cart
                </span>
            </Link>
           
        </header>
    )
}
export default Header