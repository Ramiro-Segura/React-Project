import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React, {useContext} from 'react';
import { contexto } from "../context/CartContext"


const ItemDetail = ({item}) => {
    const { addItem } = useContext(contexto);
    const [seleccionado,setSeleccionado] = useState(false)

    const onAdd = (cant) => {
        console.log("Agregar al carrito",cant)
        setSeleccionado(cant);        
        addItem(item, cant); 
    }
    return (
        <article id='descripcion'>
            <img src={item.image} alt="" />
            <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>{item.description}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            <Link to="/carrito">carrito</Link>
        </article>
    )
}
export default ItemDetail