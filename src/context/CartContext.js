import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
        toast.info("Producto eliminado",{position: "top-right",autoClose: 1000,})
        setCarrito(carrito.filter((prod) => prod.id !== id));
    }

    const calcCantidad = () =>{
        let cantidadTotal = 0;
        carrito.forEach(item => cantidadTotal += item.cantidad)
        return cantidadTotal;
    }
    
    const calcularTotal = () =>{
        let totalCarrito = 0;
        carrito.forEach((item) => {
            totalCarrito += item.precio * item.cantidad;
        });
        return totalCarrito;
    }
    
    const limpiarCarrito = () => {
        toast.warn("No hay producto(s) en el carrito",{position: "top-right",autoClose: 1000,})
        setCarrito([])
    }

    const valorDelContexto = {
        carrito: carrito,  
        addItem,
        calcCantidad,
        calcularTotal,
        borrarDelCarrito,
        limpiarCarrito
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

