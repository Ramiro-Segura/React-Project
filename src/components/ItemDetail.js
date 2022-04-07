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
    return(
        <article id='descripcion'>
            <img src={item.imageUrl} alt="producto"/>
            <div>
                <Link to="/" className='link'>
                    <span class="material-icons md-48">first_page</span>
                </Link>
                <h2>{item.nombre}</h2>
                <h3>${item.precio}</h3>
                <p>{item.descripcion}</p>
                <ItemCount stock={7} initial={1} onAdd={onAdd}/>
                <div className='ir__al__carrito'>
                    <Link to="/carrito" className='link'>
                        Ir al carrito
                    </Link>
                </div>
            </div>
        </article>
    )
}
export default ItemDetail