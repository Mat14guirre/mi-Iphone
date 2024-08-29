import { useState,useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner.jsx";
import { db } from "../../firebase/dbConnection.js";
import {collection,getDoc,doc}from "firebase/firestore"

// eslint-disable-next-line no-unused-vars
const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [loading,setLoading]  = useState (true)

    useEffect(() => {
        setLoading(true)
        const productCollection= collection(db,"productos")
        const refDoc = doc(productCollection,id)

        getDoc(refDoc)
          .then((doc)=>{
            setProduct({id:doc.id, ...doc.data()})
            setLoading(false)
          })
          .catch((error)=>{
            console.error("error getting documents: ",error)
          })
    },[id])
    
    return(
        <>
        <div className="ItemDetailConteiner">
            {loading
            ?<Spinner/>
            :<ItemDetail {...product}/>}
            
        </div>
        </>
    )
}

export default ItemDetailConteiner