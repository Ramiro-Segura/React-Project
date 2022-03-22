import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from "./Carrito"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
            <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
            <Route path="/carrito" element={<Carrito/>} />
        </Routes>
    );
}
export default Main;