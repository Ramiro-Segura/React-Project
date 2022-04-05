import {memo} from "react"
import { toast } from "react-toastify"

const TestItem = ({usuario,borrarUsuario}) => {

    const handleClick = () => {
        toast.info("Borrando", usuario.nombre)
        borrarUsuario(usuario.id)
    }
    return (
        <div>
            <p>Hola {usuario.nombre}!</p>
            <button onClick={handleClick}>Borrar Usuario</button>
        </div>
    )
}
export default memo(TestItem)