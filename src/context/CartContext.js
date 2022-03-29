import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (producto,cantidad) => {     
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...producto, cantidad};        

        if(yaEnCarrito(producto.id)) {            
            let index = copiaCarrito.findIndex (item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }

    const yaEnCarrito = (id) => {
       return carrito.some(item => item.id === id);
    }

    const borrarDelCarrito = (id) => {
        
    }

    const limpiarCarrito = () => {
        
        setCarrito([])
    }

    const calcCantidad = () =>{
        let cantidadTotal = 0;
        carrito.forEach(item => cantidadTotal += item.cantidad)
        return cantidadTotal;
    }

    const valorDelContexto = {
        carrito: carrito,  
        addItem: addItem,
       
        calcCantidad: calcCantidad,
        borrarDelCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

