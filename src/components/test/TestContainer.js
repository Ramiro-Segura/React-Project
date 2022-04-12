import {useCallback, useState} from 'react';
import TestList from './TestList';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

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
        toast.success("usuario creado!",{autoClose: 1000,
            closeOnClick: false})
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button id='boton-usuario' className='material-icons md-48' variant="primary" onClick={handleShow}>
                account_circle
            </button>
            <Modal id='modal' show={show} onHide={handleClose}>
                <Modal.Header className='modal__header__footer' closeButton>
                    <Modal.Title>Complete los siguientes datos</Modal.Title>
                </Modal.Header>
                <Modal.Body id='estilo'>
                    Nombre
                    <input type="text" onChange={handleChangeNombre} value={nombre}/>
                    Email
                    <input type="text" name='email' onChange={handleChangeEmail} value={email}/>
                    N° Celular
                    <input type="text" name='number' onChange={handleChangeTelefono} value={telefono}/>
                </Modal.Body>
                <Modal.Footer className='modal__header__footer'>
                    <Button variant="primary" onClick={handleClick}>
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <TestList usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
        </>
    )
}