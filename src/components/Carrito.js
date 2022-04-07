import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';
import { Container} from "react-bootstrap"
import { toast } from "react-toastify";
import { db } from "../Firebase";
import {TestContainer} from "./TestContainer"
import { collection, serverTimestamp, addDoc} from "firebase/firestore";

const Carrito = () => {
    const {carrito, borrarDelCarrito, calcularTotal, limpiarCarrito} = useContext(contexto)
    if (carrito.length === 0) {
        return(
        <div className="ir__al__home">
            <Link to="/" className='link'><span class="material-icons md-48">first_page</span></Link>
            <h1>El carrito esta vacio!</h1>
        </div>
        );
    }
    const terminarCompra = () =>{
        const orden = {
            items : carrito,
            date: serverTimestamp(),
            calcularTotal: calcularTotal()
        }
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)
        pedido
        .then(res=>{
            toast.success("Finalizo la compra! " + "Id : " + res.id, {autoClose: 5000,closeOnClick: false})
        })
        .catch(error=>{
            toast.error("hubo un error")
        })
    }
    return(
        <Container>
            <hr/>
            <div id="carrito">
                <TestContainer/>
                <h1>Carrito</h1>
                {carrito.map(producto => (
                    <>
                        <div key={producto.id} className="precios">
                            <img src={producto.imageUrl}/>
                            <p>{producto.nombre}</p>
                            <br/>
                            <p>{producto.cantidad} Unidad(es) x ${producto.precio}</p>
                            <br/>
                            <p>Total: ${producto.cantidad * producto.precio}</p>
                            <button onClick={() => borrarDelCarrito(producto.id)} className="material-icons md-36">delete</button>
                        </div>
                        <hr/>
                    </>
                ))}
                <button onClick={limpiarCarrito} className="material-icons md-36">remove_shopping_cart</button>
                <p className="subtotal">Subtotal: ${calcularTotal()}</p>
                <button className="finalizar" onClick={terminarCompra} >finalizar compra</button>
            </div>
        </Container>
    )
}
export default Carrito