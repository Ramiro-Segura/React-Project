import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';
import { Container, Form} from "react-bootstrap"
import { toast } from "react-toastify";
import { db } from "../Firebase";
import { collection, serverTimestamp, addDoc} from "firebase/firestore";
import { TestContainer } from "./TestContainer";
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
    const terminarCompra = () =>{
        const orden = {
            buyer : {
                nombre: "Ramiro",
                telefono: "123",
                email: "nakmangas12123@gmail.com"
            },
            items : carrito,
            date: serverTimestamp(),
            calcularTotal: calcularTotal()
        }
        const ordenesCollection = collection(db, "ordenes")
       
        const pedido = addDoc(ordenesCollection, orden)
        pedido
            .then(res=>{
                toast.success("Finalizo la compra! " + "Id : " + res.id, {autoClose: 5000,
                    closeOnClick: false})
            })
            
            .catch(error=>{
                toast.error("hubo un error")
            })
    }
  return (
    <Container>
      <div id="carrito">
          <h1>Carrito</h1>
          {carrito.map(producto => (
              <div key={producto.id} className="precios">
                  <p>{producto.nombre}</p>
                  <br/>
                  <img src={producto.imageUrl}/>
                  <br/>
                  <p>{producto.cantidad} Unidad(es) x ${producto.precio}</p>
                  <br/>
                  <p>Total: ${producto.cantidad * producto.precio}</p>
                  
                  <button onClick={() => borrarDelCarrito(producto.id)} className="material-icons md-36">remove</button>
              </div>
          ))}
          <hr/>
          <button onClick={limpiarCarrito} className="material-icons md-48">delete_forever</button>
          <p className="subtotal">Subtotal: ${calcularTotal()}</p>
          <button onClick={terminarCompra}>Terminar compra</button>
      </div>
      <TestContainer/>
      </Container>
  )
}

export default Carrito