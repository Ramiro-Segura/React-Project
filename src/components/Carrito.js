import { useContext } from "react"
import { contexto } from "../context/CartContext"

const Carrito = () => {

  const {carrito} = useContext(contexto)

  const handleClick = () => {
      
  }

  return (
      <div>
          <h1>Carrito</h1>
          {carrito.map(producto => (
              <div key={producto.id}>
                  <p>{producto.name}</p>
                  <p>{producto.cantidad} x {producto.price}</p>
                  <p>Total: {producto.cantidad * producto.price}</p>
                  <button onClick={handleClick}>Borrar</button>
              </div>
          ))}
      </div>
  )
}

export default Carrito