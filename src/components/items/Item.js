import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const Item = ({ producto}) => {
    return(
        <Container>
            <article>
                <Link to={`/producto/${producto.id}`} ><img src={producto.imageUrl}/></Link>
                <hr/>
                <h2>{producto.nombre}</h2>
                <h5>${producto.precio}</h5>
            </article>
        </Container>
    )
}
export default Item