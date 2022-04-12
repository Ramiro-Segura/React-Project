import NavBar from "./components/body/NavBar";
import Footer from "./components/body/Footer";
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailContainer"
import Carrito from "./components/cart/Carrito";
import MiProvider from "./context/CartContext";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/editorial/:idEditorial" element={<ItemListContainer/>}/>
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
