import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import { contexto } from "../context/CartContext"

const CartWidget = () => {
  const {calcCantidad} = useContext(contexto)
  return(
    <div>
      <Link to="/carrito">
        <span className="material-icons">
          shopping_cart
        </span>
        {calcCantidad()}
        </Link>
    </div>
  )
}
export default CartWidget