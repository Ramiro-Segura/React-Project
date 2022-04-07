import {memo} from "react"
import { toast } from "react-toastify"

const TestItem = ({usuario,borrarUsuario}) => {
    const handleClick = () => {
        toast.warning("Usuario ( " + usuario.nombre + " ) borrado",{autoClose: 1000,closeOnClick: false} )
        borrarUsuario(usuario.id)
    }
    return (
        <div>
            <p>Hola {usuario.nombre}!</p>
            <button className="mayusculas" onClick={handleClick}>Borrar Usuario</button>
        </div>
    )
}
export default memo(TestItem)