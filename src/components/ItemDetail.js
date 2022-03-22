import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [seleccionado,setSeleccionado] = useState(false)

    const onAdd = (cantidadSeleccionada) => {
        console.log('Agregar al carrito',cantidadSeleccionada)
        setSeleccionado(cantidadSeleccionada)
    }
    return (
        <article id='descripcion'>
            <img src={item.image} alt="" />
            <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
            <Link to="/carrito">carrito</Link>
        </article>
    )
}
export default ItemDetail