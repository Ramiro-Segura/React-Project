import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

import MiProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
const App = () => {
    return (
    <BrowserRouter>
        <MiProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
                <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </MiProvider>
        <Footer/>
        <ToastContainer/>
    </BrowserRouter>
    )
}
export default App;
