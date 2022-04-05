import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const Item = ({ producto}) => {
    return (
        <Container>
            <article>
                <img src={producto.imageUrl}/>
                <hr/>
                <h2>{producto.nombre}</h2>
                <h5>${producto.precio}</h5>
               <Link className="ver-detalle" to={`/producto/${producto.id}`}><button>Ver detalle</button></Link>
            </article>
        </Container>
    )
}
export default Item