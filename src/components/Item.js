import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article>
            <h2>{producto.title}</h2>
            <img src={producto.image}/>
            <p className="precio">Precio : ${producto.price}</p>
            <Link className="ver-detalle" to={`/producto/${producto.id}`}>Ver detalle</Link>
        </article>
    )
}
export default Item