import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React, {useContext} from 'react';
import { contexto } from "../context/CartContext"


const ItemDetail = ({item}) => {
    const { addItem } = useContext(contexto);
    const [seleccionado,setSeleccionado] = useState(false)

    const onAdd = (cant) => {
        setSeleccionado(cant);        
        addItem(item, cant); 
    }
    return (
        <article id='descripcion'>
            <img src={item.imageUrl} alt="" />
            <div>
                <h2>{item.nombre}</h2>
                <h3>${item.precio}</h3>
                <p>{item.descripcion}</p>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                <div className='ir__al__carrito'>
                    <Link to="/carrito" className='link'>
                        Ir al carrito
                    </Link>
                </div>
                <Link to="/" className='link'>Home</Link>
            </div>
        </article>
    )
}
export default ItemDetail