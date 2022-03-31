import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';
const Carrito = () => {

  const {carrito, borrarDelCarrito, calcularTotal, limpiarCarrito} = useContext(contexto)
        if (carrito.length === 0) {
        return (
            <div className="ir__al__home">
                <h1>El carrito esta vacio!</h1>
               <Link to="/">Volver a inicio</Link>
            </div>
        );
    } 
  return (
      <div id="carrito">
          <h1>Carrito</h1>
          {carrito.map(producto => (
              <div key={producto.id} className="precios">
                  <p>{producto.title}</p>
                  <br/>
                  <img src={producto.image}/>
                  <br/>
                  <p>{producto.cantidad} Unidad(es) x ${producto.price}</p>
                  <br/>
                  <p>Total: ${producto.cantidad * producto.price}</p>
                  <button onClick={() => borrarDelCarrito(producto.id)}>Eliminar producto(s)</button>
              </div>
          ))}
          <hr/>
          <button onClick={limpiarCarrito} className="vaciar__carrito">Vaciar carrito</button>
          <p className="subtotal">Subtotal: ${calcularTotal()}</p>
      </div>
  )
}

export default Carrito