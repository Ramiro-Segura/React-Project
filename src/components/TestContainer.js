import {useCallback, useState} from 'react';
import TestList from './TestList';

export const TestContainer = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [usuarios,setUsuarios] = useState([]);

    const handleClick = () => {
        const usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            id : Math.random()
        }
        setUsuarios([...usuarios, usuario])
        setNombre("")
        setEmail("")
        setTelefono("")
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const borrarUsuario = (id) => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }

    const borrarUsuarioMemorizada = useCallback(borrarUsuario,[usuarios])

    return (
        <div>
            <form>
            <input type="text" onChange={handleChangeNombre} value={nombre}/>
            <input type="text" onChange={handleChangeEmail} value={email}/>
            <input type="text" onChange={handleChangeTelefono} value={telefono}/>
            </form>
            <button onClick={handleClick}>Agregar</button>
            <TestList usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
        </div>
    )
}