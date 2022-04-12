import { useState } from "react"
import { toast } from "react-toastify"

const Contador = ({initial, stock,onAdd}) => {
    let [estado, setEstado] = useState(initial)

    const btnSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }
    }
    const btnRestar = () => {
        if(estado > initial){
            setEstado(estado - 1)
        }  
    }
    const btnRestablecer = () => {
        setEstado(1)
    }
    const btnAgregarAlCarrito = () => {
        toast.success("Agregado con exito al carrito",{position: "top-right",autoClose: 800,})
        onAdd(estado)
    }
    return (
        <div>
            <p>Cantidad seleccionada: {estado}</p>
            <button onClick={btnSumar} className="material-icons md-36">add</button>
            <button onClick={btnRestar} className="material-icons md-36">remove</button>
            <button onClick={btnRestablecer} className="material-icons md-36">clear</button>
            <hr/>
            <button className="mayusculas" onClick={btnAgregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}
export default Contador