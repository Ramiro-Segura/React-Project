import { useContext } from "react"
import { contexto } from "../context/CartContext"

const Carrito = () => {

  const {carrito, borrarDelCarrito} = useContext(contexto)

  const handleClick = () => {
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
                  <p>{producto.cantidad} x ${producto.price}</p>
                  <br/>
                  <p>Total: ${producto.cantidad * producto.price}</p>
                  <button onClick={handleClick}>Borrar</button>
              </div>
          ))}
      </div>
  )
}

export default Carrito