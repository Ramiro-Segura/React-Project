import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import MiProvider from "./context/CartContext";

const App = () => {
    return (
    <BrowserRouter>
        <MiProvider>
            <NavBar/>
            <Main/>
        </MiProvider>
        <Footer/>
        <ToastContainer/>
    </BrowserRouter>
    )
}
export default App;
