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
        <div id="botones">
            <p>Cantidad seleccionada: {estado}</p>
            <button onClick={btnSumar}>Sumar cantidad</button>
            <button onClick={btnRestar}>Restar cantidad</button>
            <button onClick={btnRestablecer}>Restablecer cantidad</button>
            <button onClick={btnAgregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}
export default Contador