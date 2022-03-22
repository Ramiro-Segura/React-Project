import { useState } from "react"

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
    
    const btnAgregar = () => {
        onAdd(estado)
    }
    
    return (
        <div id="botones">
            <p>Cantidad seleccionada: {estado}</p>
            <button onClick={btnSumar}>Sumar</button>
            <button onClick={btnRestar}>Restar</button>
            <button onClick={btnRestablecer}>Restablecer</button>
            <button onClick={btnAgregar}>Agregar al carrito</button>
        </div>
    )
}
export default Contador