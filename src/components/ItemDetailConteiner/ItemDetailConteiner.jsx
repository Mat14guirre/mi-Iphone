import { useState,useEffect } from "react";
import { getProductById } from "../fetchData/fetchData.js";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
          .then((res) => {
            setProduct(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            
          });
    },[id])
    
    return(
        <>
        <div className="ItemDetailConteiner">
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
        </>
    )
}

export default ItemDetailConteiner