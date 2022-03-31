import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { db } from "../Firebase"
import { collection, getDocs, query , where } from "firebase/firestore"

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    
    useEffect(() => {
       
        if(!idCategoria){

            const productosCollection = collection(db, "products")
            const pedido = getDocs(productosCollection)
    
            pedido
                .then(res => setProductos(res.docs.map(doc => doc.data())))
                .catch(() => toast.error("Error al cargar los productos"))
                .finally(() => setLoading(false))

        }else{

            const productosCollection = collection(db, "products")
            const filtro = query(productosCollection,where("category","==",idCategoria))
            const pedido = getDocs(filtro)

            pedido
                .then(res => setProductos(res.docs.map(doc => doc.data())))
                .catch(() => toast.error("Error al cargar los productos"))
                .finally(() => setLoading(false))

        }

    },[idCategoria])

    if(loading){
        return <h1>Cargando...</h1>
    }else{
        return <ItemList productos={productos}/>
    }
}

export default ItemListContainer